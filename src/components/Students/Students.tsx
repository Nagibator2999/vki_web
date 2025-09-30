'use client';

import useStudents from '@/hooks/useStudents';
import type StudentsInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Students}>
      {students.map((student: StudentsInterface) => (
        <h2 key={student.first_name}>
          {student.last_name}
          {student.groupid}
        </h2>
      ))}
    </div>
  );
};

export default Students;