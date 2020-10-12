function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order);
  return deliveryOrders;
  }
  else {
    return deliveryOrders;
  }
};

function refundOrder(orderNum, deliveryOrders) {
  if (orderNum == deliveryOrders[orderNum - 1].orderNumber) {
    deliveryOrders.splice(orderNum - 1, 1);
    return deliveryOrders;
  }
  else {
    return deliveryOrders;
  };
};

function listItems(deliveryOrders) {
  return `${deliveryOrders[0].item}, ${deliveryOrders[1].item}, ${deliveryOrders[2].item}`;
};

function searchOrder(deliveryOrders, item) {
  var i = 0;
  if (item === deliveryOrders[i].item) {
      return true;
    }
  else if (item === deliveryOrders[i + 1].item) {
      return true;
    }
  else {
    return false;
  }
};
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
