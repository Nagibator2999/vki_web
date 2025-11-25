'use client';

import useGroups from '@/hooks/useGroups';
import type GroupInterface from '@/types/GroupInterface';
import styles from './Groups.module.scss';
import StudentInterface from '@/types/StudentInterface';

const Groups = (): React.ReactElement => {
  const { groups } = useGroups();

  return (
    <div className={styles.Groups}>
      {groups.map((group: GroupInterface) => (
        <section>
          <h2 key={group.id}>
            {group.name}
          </h2>

          {group.students && group.students.map((student:StudentInterface) => (
            <div key={student.id}>{`${student.id} - ${student.lastName} ${student.firstName}`}</div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Groups;
