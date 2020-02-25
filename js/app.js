function start() {
    let numBegin = +prompt("Nhập vào số đầu tiên trong khoảng đoán");
    let numEnd = +prompt("Nhập vào số cuối cùng trong khoảng đoán");
    let numRand = Math.floor(Math.random() * (numEnd - numBegin) + numBegin);
    let index;
    let numInput = +prompt("Bạn hãy đoán số máy tính đã chọn", "Lưu ý chỉ được nhập tối đa 3 lần");
    for (index = 0 ; index < 3; index++) {
        if (numInput < numRand) {
            numInput = +prompt("Số bạn đoán bé hơn số máy tính chọn, nhập số cao hơn");
        } else if (numInput > numRand) {
            numInput = +prompt("Số bạn đoán cao hơn số máy tính chọn, nhập vào số bé hơn");
        } else {
            alert("Chúc mừng, bạn đã đoán trúng");
            break;
        }
    }
}

//Chức năng đoán mãi mãi
// while (numInput !== numRand) {
//     if (numInput < numRand) {
//         numInput = +prompt("Số bạn đoán bé hơn số máy tính chọn, nhập số cao hơn");
//     } else if (numInput > numRand) {
//         numInput = +prompt("Số bạn đoán cao hơn số máy tính chọn, nhập vào số bé hơn");
//     }
// }
// alert("Chúc mừng bạn đã đoán trúng");

