import swal from "sweetalert";
export const sweetAlertBasic = (msg) => {
  swal(msg);
};
export const sweetAlertStanderd = (title, msg, type = "success") => {
  swal({
    title: title,
    text: msg,
    icon: type,
    button: "ok",
  });
};
export const sweetAlertConfirm = (title, msg, type = "success") => {
  swal({
    title: title,
    text: msg,
    icon: type,
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Not deleted", {
        icon: "success",
      });
    } else {
      swal("Deleted successfully!");
    }
  });
};
