// MegaMart 코드
var shopping_cart = []; // 장바구니 제품과 금액 합계를 담고 있는 전역 변수
var shopping_cact_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price); // 빼낸 부분은 새로 만든 함수를 호출하도록 구성. 전역변수를 인자로 넘긴다.
  // 암묵적 출력을 없애기 위해 원래 함수에서는 리턴값을 받아 전역변수에 할당
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(); // shopping_cart 배열을 인자로 전달한다.
  calc_total(); // 새로 만든 함수를 불러 줍니다.
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom(); // 페이지에 있는 모든 구매 버튼을 가져와 반복문을 적용합니다.
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (gets_free_shipping(shopping_cart_total, item.price))
      // 무료 배송이 가능한지 확인합니다.
      button.show_free_shipping_icon(); // 결정에 따라 무료 배송 아이콘을 보여주거나 보여주지 않습니다.
    else button.hide_free_shipping_icon(); //
  }
}

// 세금 계산하기
function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cact_total));
}

function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    // 복사본을 변경한다.
    // 전역변수 대신 인자를 사용하도록 구성
    name: name,
    price: price,
  });
  return new_cart; // 복사본을 리턴한다.
}

function calc_total(cart) {
  var total = 0; // 지역변수를 사용한다.
  for (var i = 0; i < cart.length; i++) {
    // 전역변수 대신 인자를 만들어 사용합니다.
    var item = cart[i];
    total += item.price;
  }
  return total; // 지역변수를 리턴한다.
}

function gets_free_shipping(total, item_price) {
  return item.price + total >= 20;
}

function calc_tax(amount) {
  return amount * 0.1;
}
