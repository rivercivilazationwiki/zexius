
import { Text, View } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { DataTable } from "react-native-paper";
import styles from '../styles';

export default function CheckAppP() {
  const { name } = useContext(AppContext);
  const [data, setData] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://notable-oddly-falcon.ngrok-free.app/appP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patient: name }),
    })
      .then((r) => r.json())
      .then((response) => {
        setData(response.data || []);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);
  function toDateString(date) { 
    date=new Date(date);
    return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My Appointments
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Doctor</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>

        {data.map((el, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{el.doctor}</DataTable.Cell>
            <DataTable.Cell>{toDateString(el.date)}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
