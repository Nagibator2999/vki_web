interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  isDeleted?: boolean;
  isAdd?:boolean;
};

export default StudentInterface;
