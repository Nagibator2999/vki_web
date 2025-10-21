interface StudentInterface {
  id: number;
  uuid?: string;
  firstName: string;
  lastName: string;
  middleName: string;
<<<<<<< HEAD
  contacts?: string;
  groupId: number;
=======
  groupId: number;
  uuid?: string;
>>>>>>> c0d6f0eb35a95e2a51a7c5a42ec9e85f06b82146
  isDeleted?: boolean;
  isNew?: boolean;
  isAdd?: boolean;
};

export default StudentInterface;
