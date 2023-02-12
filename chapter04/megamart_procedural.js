// MegaMart 코드
var shopping_cart = []; // 장바구니 제품과 금액 합계를 담고 있는 전역 변수
var shopping_cact_total = 0;

function add_item_to_cart(name, price) {
  shopping_cact.push({
    // 장바구니에 제품을 담기 위해 cart 배열에 레코드를 추가
    name: name,
    price: price,
  });
  calc_cart_total(); // 장바구니 제품이 바뀌었기 때문에 금액 합계를 업데이트
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price; // 모든 제품값 더하기
  }
  set_cart_total_dom(); // 금액 합계를 반영하기 위해 DOM 업데이트
  update_shipping_icons(); // 합계 금액이 바뀔때마다 모든 아이콘을 업데이트 하기 위해 calc_cart_total() 함수 마지막에 update_shipping_icons() 함수를 불러줍니다.
  update_tax_dom(); // 장바구니의 금액 합계가 바뀔때마다 세금을 다시 계산해야 합니다.
}

// 구매합계가 20달러 이상이면 무료배송을 해주는 기능을 만들기
// 절차적인 스타일로 작성 후 함수형 스타일로 리팩토링
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom(); // 페이지에 있는 모든 구매 버튼을 가져와 반복문을 적용합니다.
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20)
      // 무료 배송이 가능한지 확인합니다.
      button.show_free_shipping_icon(); // 결정에 따라 무료 배송 아이콘을 보여주거나 보여주지 않습니다.
    else button.hide_free_shipping_icon(); //
  }
}

// 세금 계산하기
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}
