import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TIMELINE = [
  {
    year: "2024 – Present",
    title: "Computer Education",
    place: "King Mongkut's University of Technology North Bangkok",
    detail: "Computer Education · Current GPAX 2.98",
    current: true,
  },
  {
    year: "2020 – 2024",
    title: "High School (English–Math)",
    place: "Benchamateputhit School",
    detail: "Focused on Mathematics, But I focused on sleeping and playing games instead of studying GPAX 2.00",
    current: false,
  },
  {
    year: "2017 – 2020",
    title: "Junior High School",
    place: "Benchamateputhit School",
    detail: "Getting GPAX 2.05, I was a very lazy student and I didn't care about my studies at all.",
    current: false,
  },
];

const SKILLS = [
  { name: "Sleep", level: 0.85 },
  { name: "Game", level: 0.7 },
  { name: "Coding", level: 0.2 },
  { name: "AI (Prompt)", level: 0.75 },
];

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
      <Text style={styles.sectionTitle}>Education History</Text>

      {TIMELINE.map((item, i) => (
        <View key={i} style={styles.timelineRow}>
          {/* Left rail */}
          <View style={styles.rail}>
            <View style={[styles.dot, item.current && styles.dotActive]}>
              {item.current && <View style={styles.dotInner} />}
            </View>
            {i !== TIMELINE.length - 1 && <View style={styles.line} />}
          </View>

          {/* Card */}
          <View style={[styles.card, item.current && styles.cardActive]}>
            <View style={styles.yearPill}>
              <Text style={styles.yearText}>{item.year}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.placeRow}>
              <Ionicons name="business-outline" size={13} color="#6B7280" />
              <Text style={styles.place}>{item.place}</Text>
            </View>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        </View>
      ))}

      <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Skills</Text>
      <View style={styles.skillCard}>
        {SKILLS.map((s) => (
          <View key={s.name} style={styles.skillRow}>
            <View style={styles.skillHead}>
              <Text style={styles.skillName}>{s.name}</Text>
              <Text style={styles.skillPct}>{Math.round(s.level * 100)}%</Text>
            </View>
            <View style={styles.barBg}>
              <View style={[styles.barFill, { width: `${s.level * 100}%` }]} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA" },
  sectionTitle: { fontSize: 17, fontWeight: "800", color: "#1F2145", marginBottom: 14 },
  timelineRow: { flexDirection: "row", gap: 12 },
  rail: { alignItems: "center", width: 22 },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#D6D3F5",
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  dotActive: { backgroundColor: "#5B4FE9" },
  dotInner: { width: 5, height: 5, borderRadius: 3, backgroundColor: "#fff" },
  line: { flex: 1, width: 2, backgroundColor: "#E0DEF7", marginVertical: 3 },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardActive: { borderLeftWidth: 4, borderLeftColor: "#5B4FE9" },
  yearPill: {
    alignSelf: "flex-start",
    backgroundColor: "#EEEDFD",
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 8,
    marginBottom: 7,
  },
  yearText: { fontSize: 11, fontWeight: "700", color: "#5B4FE9" },
  title: { fontSize: 15, fontWeight: "800", color: "#1F2145" },
  placeRow: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 4 },
  place: { flex: 1, fontSize: 12, color: "#6B7280", fontWeight: "600" },
  detail: { fontSize: 12, color: "#9CA3AF", marginTop: 6, lineHeight: 18 },
  skillCard: { backgroundColor: "#fff", borderRadius: 16, padding: 16, elevation: 2 },
  skillRow: { marginBottom: 14 },
  skillHead: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  skillName: { fontSize: 13, fontWeight: "700", color: "#1F2145" },
  skillPct: { fontSize: 12, fontWeight: "700", color: "#5B4FE9" },
  barBg: { height: 7, backgroundColor: "#EEEDFD", borderRadius: 4, overflow: "hidden" },
  barFill: { height: "100%", backgroundColor: "#5B4FE9", borderRadius: 4 },
});