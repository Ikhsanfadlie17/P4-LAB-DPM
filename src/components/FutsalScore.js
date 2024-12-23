import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FutsalScore = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState("");

  const handleScore = (team, action) => {
    if (team === "A") {
      const newScore = action === "add" ? scoreA + 1 : Math.max(0, scoreA - 1);
      setScoreA(newScore);
      if (newScore >= 10) setWinner("Tim A");
    } else {
      const newScore = action === "add" ? scoreB + 1 : Math.max(0, scoreB - 1);
      setScoreB(newScore);
      if (newScore >= 10) setWinner("Tim B");
    }
  };

  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>

      {winner ? (
        <View style={styles.alert}>
          <Text style={styles.alertTitle}>Selamat!</Text>
          <Text style={styles.alertDescription}>
            {winner} telah memenangkan pertandingan!
          </Text>
        </View>
      ) : null}

      <View style={styles.scoreContainer}>
        {/* Tim A */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => handleScore("A", "add")}
              disabled={!!winner}
              style={[
                styles.button,
                styles.addButton,
                winner && styles.buttonDisabled,
              ]}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleScore("A", "subtract")}
              disabled={scoreA === 0 || !!winner}
              style={[
                styles.button,
                styles.subtractButton,
                (scoreA === 0 || winner) && styles.buttonDisabled,
              ]}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tim B */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamTitle}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => handleScore("B", "add")}
              disabled={!!winner}
              style={[
                styles.button,
                styles.addButton,
                winner && styles.buttonDisabled,
              ]}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleScore("B", "subtract")}
              disabled={scoreB === 0 || !!winner}
              style={[
                styles.button,
                styles.subtractButton,
                (scoreB === 0 || winner) && styles.buttonDisabled,
              ]}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    margin: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  alert: {
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  alertDescription: {
    fontSize: 16,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    minWidth: 44,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#3b82f6",
  },
  subtractButton: {
    backgroundColor: "#ef4444",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  resetButton: {
    backgroundColor: "#6b7280",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default FutsalScore;
