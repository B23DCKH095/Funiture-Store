// Lấy tất cả các nút có class 'btn-add-to-cart'
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

// Lặp qua từng nút và thêm sự kiện click
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Ngăn chặn hành vi mặc định của thẻ <a> (chuyển trang)
        event.preventDefault();

        // Lấy thông tin sản phẩm từ thẻ cha
        const productItem = event.target.closest('.product-item');
        const productName = productItem.querySelector('h3').innerText;
        const productPrice = productItem.querySelector('.price').innerText;

        // Tùy chọn: Thêm một thông báo nhỏ cho người dùng
        alert(`Đã thêm sản phẩm "${productName}" vào giỏ hàng!`);

        // Tùy chọn: Cập nhật số lượng sản phẩm trong giỏ hàng (sẽ cần HTML giỏ hàng)
        // Đây là phần mở rộng bạn có thể làm cho bài tập lớn của mình
        console.log(`Sản phẩm đã được thêm: ${productName}, Giá: ${productPrice}`);
    });
});