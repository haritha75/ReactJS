import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder({ order }) {
  console.log(order); // we didnot use this one so it shows error.
  const fetcher = useFetcher();
  return (
    // it will not navigate it just submit the form and revalidate the page.
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
}

// above form will be connected ot this action.
export async function action({ request, params }) {
  console.log(request); // their is an error not using request that's why i am consoleing it.
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

UpdateOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.bool.isRequired,
    priorityPrice: PropTypes.number.isRequired,
    orderPrice: PropTypes.number.isRequired,
    estimatedDelivery: PropTypes.number.isRequired,
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        totalPrice: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
