<<<<<<< HEAD
import { getStudentsDb, addStudentDb } from '@/db/studentDb';
import { type NextApiRequest } from 'next/types';
=======
import { NextRequest, NextResponse } from 'next/server';
import { addStudentDb, getStudentsDb } from '@/db/studentsDb';
>>>>>>> c0d6f0eb35a95e2a51a7c5a42ec9e85f06b82146

export async function GET() {
  try {
    const students = await getStudentsDb();
    return NextResponse.json(students);
  } catch (error) {
    console.error('Ошибка GET /api/students:', error);
    return NextResponse.json({ error: 'Ошибка при загрузке студентов' }, { status: 500 });
  }
}

<<<<<<< HEAD
  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function POST(req: NextApiRequest): Promise<Response> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const student = await req.json();

  const newStudent = await addStudentDb(student);

  console.log(newStudent);
  return new Response(JSON.stringify(newStudent), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
=======
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
>>>>>>> c0d6f0eb35a95e2a51a7c5a42ec9e85f06b82146
