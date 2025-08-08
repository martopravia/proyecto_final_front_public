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

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { getOrders } = useApi();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await getOrders({ userId: user.id });
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
    <Container className="my-5 px-3" style={{ maxWidth: "1200px" }}>
      <h2 className="mb-5 text-center">
        ACCOUNT OF {user.firstname.toUpperCase()}
      </h2>

      <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
        {/* Personal Info */}
        <Card
          className="p-4 shadow-sm flex-grow-1"
          style={{ minWidth: "300px", maxWidth: "450px" }}
        >
          <h5 className="mb-3">PERSONAL INFORMATION</h5>
          <p>
            <strong>First name:</strong> {user.firstname}
          </p>
          <p>
            <strong>Last name:</strong> {user.lastname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <Link to="/profile/edit">
            <Button variant="dark" className="w-100 mt-3">
              VIEW / EDIT
            </Button>
          </Link>
        </Card>

        {/* Order History */}
        <Card
          className="p-4 shadow-sm flex-grow-1"
          style={{ minWidth: "300px", maxWidth: "650px" }}
        >
          <h5 className="mb-3">ORDER HISTORY</h5>

          {loadingOrders && <p>Loading orders...</p>}
          {errorOrders && <p className="text-danger">{errorOrders}</p>}
          {!loadingOrders && orders.length === 0 && <p>No orders found.</p>}

          {!loadingOrders && orders.length > 0 && (
            <div className="d-flex flex-column gap-3 w-100">
              {orders.map((order) => (
                <Card className="p-3 bg-light border-0 w-100" style={{ maxWidth: "100%" }} key={order.id}>
                  <h6 className="mb-2">Order #{order.id}</h6>
                  <p className="mb-1">
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p className="mb-2">
                    <strong>Date:</strong>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                  {order.orderDetails?.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center border-bottom pb-1 mb-2"
                    >
                      <span>
                        <strong>{item.name}</strong> x{item.quantity}
                      </span>
                      <span>
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="text-end fw-bold">
                    Total: ${order.totalAmount}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>
      </div>
    </Container>
  );
}
