import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onAdd: (id: number) => void;
}

const AddStudent = ({ student, onAdd }: Props): React.ReactElement => {
  const onAddHandler = (): void => {
    onAdd(student.id);
  };

  return (
    <div className={`${styles.Student} ${student.isAdd ? styles['--isAdd'] : '' } `}>
      {`${student.id} - ${student.lastName} ${student.firstName} ${student.middleName}`}
      <button onClick={onAddHandler}>Удалить</button>
    </div>
  );
};

export default AddStudent;