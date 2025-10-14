import { NextRequest, NextResponse } from 'next/server';
import { addStudentDb, getStudentsDb } from '@/db/studentsDb';

export async function GET() {
  try {
    const students = await getStudentsDb();
    return NextResponse.json(students);
  } catch (error) {
    console.error('Ошибка GET /api/students:', error);
    return NextResponse.json({ error: 'Ошибка при загрузке студентов' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.firstName || !body.lastName || body.groupId === undefined) {
      return NextResponse.json(
        { error: 'firstName, lastName и groupId обязательны' },
        { status: 400 }
      );
    }

    const newStudent = await addStudentDb(body);
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.error('Ошибка POST /api/students:', error);
    return NextResponse.json({ error: 'Не удалось создать студента' }, { status: 500 });
  }
}

// import { getStudentsDb } from '@/db/studentsDb';

// export async function GET(): Promise<Response> {
//   const students = await getStudentsDb();

//   return new Response(JSON.stringify(students), {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };
