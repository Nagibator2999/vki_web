interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  groupId: number;
  uuid?: string;
  isDeleted?: boolean;
  isAdd?:boolean;
};

export default StudentInterface;
