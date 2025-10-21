import sqlite3 from 'sqlite3';
import type StudentInterface from '@/types/StudentInterface';

sqlite3.verbose();

const getDbPath = () => process.env.DB ?? './db/vki-web.db';

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
  const db = new sqlite3.Database(getDbPath());

  const students = await new Promise<StudentInterface[]>((resolve, reject) => {
    const sql = 'SELECT * FROM student';
    db.all(sql, [], (err, rows) => {
      db.close();
      if (err) {
        reject(err);
      } else {
        resolve(rows as StudentInterface[]);
      }
    });
  });

  return students;
};

export const addStudentDb = async (
  student: Omit<StudentInterface, 'id'> & { uuid?: string }
): Promise<StudentInterface> => {
  const db = new sqlite3.Database(getDbPath());

  const newStudent = await new Promise<StudentInterface>((resolve, reject) => {
    const sql = `
      INSERT INTO student (firstName, lastName, middleName, groupId, uuid)
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [
      student.firstName,
      student.lastName,
      student.middleName ?? null,
      student.groupId,
      student.uuid ?? null,
    ];

    db.run(sql, params, function (err) {
      if (err) {
        db.close();
        reject(err);
        return;
      }

      const selectSql = 'SELECT * FROM student WHERE id = ?';
      db.get(selectSql, [this.lastID], (err, row) => {
        db.close();
        if (err) {
          reject(err);
        } else {
          resolve(row as StudentInterface);
        }
      });
    });
  });

  return newStudent;
};

export const deleteStudentDb = async (studentId: number): Promise<number> => {
  const db = new sqlite3.Database(getDbPath());

  await new Promise<void>((resolve, reject) => {
    db.run('DELETE FROM student WHERE id = ?', [studentId], (err) => {
      db.close();
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  return studentId;
};
// import sqlite3 from 'sqlite3';

// import type StudentInterface from '@/types/StudentInterface';

// sqlite3.verbose();

// export const getStudentsDb = async (): Promise<StudentInterface[]> => {
//   const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

//   const students = await new Promise((resolve, reject) => {
//     const sql = 'SELECT * FROM student';
//     db.all(sql, [], (err, rows) => {
//       if (err) {
//         reject(err);
//         db.close();
//         return;
//       }
//       resolve(rows);
//       db.close();
//     });
//   });

//   // test data
//   // const groups: GroupInterface[] = [
//   //   {
//   //     name: '2207 д2',
//   //   },
//   //   {
//   //     name: '2207 д2',
//   //   },
//   // ];

//   return students as StudentInterface[];
// };
// export const deleteStudentDb = async (studentId: number): Promise<number> => {
//   const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

//   await new Promise((resolve, reject) => {
//     db.run('DELETE FROM student WHERE id=?', [studentId], (err) => {
//       if (err) {
//         reject(err);
//         db.close();
//         return;
//       }
//       resolve(studentId);
//       db.close();
//     });
//   });

//   return studentId;
// };
