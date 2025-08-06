import { useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Profile() {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [errorOrders, setErrorOrders] = useState(null);

  const user = useSelector((state) => state.user.user);
  const { getOrdersByUser } = useApi();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getOrdersByUser(user.id);
        setOrders(fetchedOrders || []);
      } catch (err) {
        setErrorOrders("Error al obtener órdenes");
      } finally {
        setLoadingOrders(false);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user?.id]);

  if (!user) {
    return (
      <Container className="mt-5">
        <h2>You are not logged in</h2>
        <Button variant="primary" onClick={() => navigate("/login")}>
        Go to login
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4">Account of {user.firstname}</h2>

      <Row>
        <Col md={4}>
          <Card className="p-3 mb-4">
            <h5 className="mb-3">Personal Information</h5>
            <p>
              <strong>First Name:</strong> {user.firstname}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastname}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <Link to="/profile/edit">
              <Button variant="dark">View / Edit</Button>
            </Link>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="p-3">
            <h5 className="mb-3">Wishlist</h5>
            <div className="d-flex flex-wrap gap-3">
              <img src="/img1.png" alt="Producto 1" width={60} height={60} />
              <img src="/img2.png" alt="Producto 2" width={60} height={60} />
              <img src="/img3.png" alt="Producto 3" width={60} height={60} />
              <img src="/img4.png" alt="Producto 4" width={60} height={60} />
            </div>
            <p className="mt-3">4 productos</p>
          </Card>

          <Card className="p-3 mt-4">
            <h5 className="mb-3">Order History</h5>

            {loadingOrders && <p>Cargando órdenes...</p>}
            {errorOrders && <p className="text-danger">{errorOrders}</p>}

            {!loadingOrders && orders.length === 0 && (
              <p>You have no recorded orders.</p>
            )}

            {!loadingOrders && orders.length > 0 && (
              <ul className="list-group">
                {orders.map((order) => (
                  <li key={order.id} className="list-group-item">
                    <strong>ID:</strong> {order.id} | <strong>Total:</strong> $
                    {order.totalAmount} | <strong>Status:</strong>{" "}
                    {order.status} | <strong>Date:</strong>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
