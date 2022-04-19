function copyNB() {
    /* Get the text field */
    var copyText = "BIDV 1234567890";

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert("Đã sao chép tên ngân hàng và số tài khoản");
}
