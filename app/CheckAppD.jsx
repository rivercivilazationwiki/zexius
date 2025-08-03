import { Text, View } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { DataTable } from "react-native-paper";

export default function CheckAppD() {
  const { name } = useContext(AppContext);
  const [data, setData] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://notable-oddly-falcon.ngrok-free.app/appD", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ doctor: name }),
    })
      .then((r) => r.json())
      .then((response) => {
        setData(response.data || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        List of Appointments
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Patient</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>

        {data.map((el, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{el.patient}</DataTable.Cell>
            <DataTable.Cell>{el.date}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
