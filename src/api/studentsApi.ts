import type StudentInterface from '@/types/StudentInterface';

export const getStudentsApi = async (): Promise<StudentInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    const students = await response.json() as StudentInterface[];
    return students;
  }
  catch (err) {
    console.log('>>> getGroupsApi', err);
    return [] as StudentInterface[];
  }
};

export const deleteStudentApi = async (studentId: number): Promise<number> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students/${studentId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    return studentId;
  }
  catch (err) {
    console.log('>>> deleteStudentApi', err);
    return -1;
  }
};

<<<<<<< HEAD
export const addStudentApi = async (student: StudentInterface): Promise<StudentInterface> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
=======
export const createStudentApi = async (student: Omit<StudentInterface, 'id'> & { uuid?: string }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
>>>>>>> c0d6f0eb35a95e2a51a7c5a42ec9e85f06b82146
      body: JSON.stringify(student),
    });

    if (!response.ok) {
<<<<<<< HEAD
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return response.json() as Promise<StudentInterface>;
  }
  catch (err) {
    console.log('>>> addStudentApi', err);
    throw err;
  }
};
=======
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    return await response.json() as StudentInterface;
  } catch (err) {
    console.error('>>> createStudentApi', err);
    throw err; 
  }
};
>>>>>>> c0d6f0eb35a95e2a51a7c5a42ec9e85f06b82146
