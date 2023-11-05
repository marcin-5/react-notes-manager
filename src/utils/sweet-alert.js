import Swal from "sweetalert2";

export async function showAlert(type, msg) {
  return Swal.fire({
    position: "top-end",
    icon: type,
    showConfirmButton: false,
    timer: type === "error" ? 3210 : 2345,
    toast: true,
    title: msg,
  });
}
