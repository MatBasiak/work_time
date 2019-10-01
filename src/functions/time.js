import moment from "moment";

const timeDifference = (start, end) => {
  let a = moment(start);
  let b = moment(end);
  let res = b.diff(a, "hours");
  console.log(res);
};
export default timeDifference;
