var numbers = []
function addNumber() {
    var number = Number(document.getElementById("themSo").value);
    if (number == "") {
        numbers.push(0);
    } else {
        numbers.push(number);
    }
    document.getElementById("txtNumber").innerHTML = numbers.join(" , ");

}
document.getElementById("btnThemSo").onclick = addNumber;
// TỔNG SỐ DƯƠNG
function tongDuong() {
    var sum = 0;
    for (var i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 0) {
            sum = Number(sum) + Number(numbers[i]);
        }
    }
    document.getElementById("txttongsd").innerHTML = "Tổng số dương = " + sum;

}
document.getElementById("btntongsd").onclick = tongDuong;
//ĐẾM SỐ DƯƠNG
function demSoDuong() {
    var count = 0;
    for (var i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtDemsd").innerHTML = "Có " + count + " số dương";
}
document.getElementById("btnDemsd").onclick = demSoDuong;
// TÌM SỐ NHỎ NHẤT
function soMin() {
    var index = 0;
    var min = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
            index = i
        }
    }
    document.getElementById("txtMin").innerHTML = "Số nhỏ nhất " + min;
}
document.getElementById("btnMin").onclick = soMin;
//TÌM SỐ DƯƠNG NHỎ NHẤT
function soDuongMin() {
    var index = 0;
    var min = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min && numbers[i] > 0) {
            min = numbers[i];
            index = i;
        } else {
            "không có số dương"
        }
        document.getElementById("txtMinDuong").innerHTML = "Số dương nhỏ nhất " + min;
    }
}
document.getElementById("btnMinDuong").onclick = soDuongMin;

// So chan cuoi cung
function sochanend() {
    var chanend = numbers[numbers.length - 1];
    for (var i = chanend; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            chanend = numbers[i];
            document.getElementById("txtchanEnd").innerHTML = chanend;
            break;
        }
    }
    if (chanend === undefined) {
        document.getElementById("txtchanEnd").innerHTML = "Không có số chẵn";
    }
}
document.getElementById("btnchanEnd").onclick = sochanend;
// đổi chỗ
function swap() {
    var number1 = document.getElementById("changenum1").value;
    var number2 = document.getElementById("changenum2").value;
    var temp = numbers[number1];
    numbers[number1] = numbers[number2];
    numbers[number2] = temp;
    document.getElementById("txtswap").innerHTML = numbers;
}
document.getElementById("btnswap").onclick = swap;
// sắp xếp tăng dần 
function tangDan() {
    var numberscoppy = [];
    for (var i = 0; i < numbers.length; i++) {
        numberscoppy.push(numbers[i])
    }
    numberscoppy.sort(function (a, b) {
        return a - b;
    })
    document.getElementById("txtTang").innerHTML = "mảng sắp xếp tăng dần " + numberscoppy;
}
document.getElementById("btnTang").onclick = tangDan;
// số nguyên tố đầu tiên
function soNT() {
    var kiemTra = true;
    for (var i = 0; i < numbers.length; i++) {
        for (var ii = 2; ii < Math.sqrt(numbers[ii]); ii++) {
            if (numbers[i] % ii === 0) {
                kiemTra = false;
                break;
            }
        }
        if (numbers[i] > 1 && kiemTra && Number.isInteger(numbers[i])) {
            document.getElementById("txtSoNT").innerHTML = numbers[i];
            break;
        }
        else {
            document.getElementById("txtSoNT").innerHTML = "Không có số nguyên tố"
        }
    }

}
document.getElementById("btnSoNT").onclick = soNT;
// DEM SO NGUYEN
var numbers2 = [];
function addNumber2() {
    var number = Number(document.getElementById("nhapso").value);
    if (number == "") {
        numbers2.push(0);
    } else {
        numbers2.push(number);
    }
    document.getElementById("txtThem").innerHTML = numbers2.join(" , ");
}
document.getElementById("btnThem").onclick = addNumber2;
function demSoNguyen() {
    var count = 0;
    for (var i = 0; i < numbers2.length; i++) {
        if (Number.isInteger(numbers2[i])) {
            count++;
            document.getElementById("txtSoNguyen").innerHTML = count;
        }
    }

}
document.getElementById("btnDemSN").onclick = demSoNguyen;
// so sánh
function demSo() {
    var countduong = 0;
    var countam = 0;
    var ketqua = "";
    for (var i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i]) && numbers[i] >= 0) {
            countduong++;
        } else if (Number.isInteger(numbers[i]) && numbers[i] <= 0) {
            countam++
        }
        if (countduong > countam) {
            ketqua = "số dương lớn hơn số âm"
        }
        else if (countduong < countam) {
            ketqua = "số âm lớn hơn số dương"
        } else {
            ketqua = "số dương bằng số âm"
        }
    }
    document.getElementById("txtSoSanh").innerHTML = ketqua;
}
document.getElementById("btnSoSanh").onclick = demSo;
