import "./App.css";
import "./components/deliveryForm/DeliveryForm";
import DeliveryForm from "./components/deliveryForm/DeliveryForm";

function App() {
  const handleFormSubmit = (formData) => {
    alert(
      `Name: ${formData.name}\nAddress: ${formData.address}\nCity: ${formData.city}`
    );
  };

  return (
    <div>
      <DeliveryForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
