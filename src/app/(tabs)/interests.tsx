import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const INTERESTS = [
  { icon: "hardware-chip-outline", label: "AI & LLM", color: "#5B4FE9" },
  { icon: "phone-portrait-outline", label: "Mobile Dev", color: "#EC4899" },
  { icon: "server-outline", label: "Backend", color: "#10B981" },
  { icon: "game-controller-outline", label: "Gaming", color: "#F59E0B" },
  { icon: "musical-notes-outline", label: "Music", color: "#8B5CF6" },
  { icon: "camera-outline", label: "Photography", color: "#06B6D4" },
];

const ACTIVITIES = [
  {
    icon: "briefcase-outline",
    title: "Internship at National Telecom (NT)",
    period: "2026",
    desc: "Worked on local LLM deployment, RAG systems, and AI research infrastructure.",
  },

  {
    icon: "trophy-outline",
    title: "Sleeping",
    period: "2024",
    desc: "Sleeps for 24 hours. Reached the day.",
  },
  {
    icon: "book-outline",
    title: "Self-Learning Projects",
    period: "Ongoing",
    desc: "Building side projects with Python, React Native, and the Gemini API.",
  },
];

export default function InterestsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
      <Text style={styles.sectionTitle}>My Interests</Text>
      <View style={styles.grid}>
        {INTERESTS.map((it) => (
          <View key={it.label} style={styles.chip}>
            <View style={[styles.chipIcon, { backgroundColor: it.color + "1A" }]}>
              <Ionicons name={it.icon as any} size={20} color={it.color} />
            </View>
            <Text style={styles.chipText}>{it.label}</Text>
          </View>
        ))}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 26 }]}>Activities</Text>
      {ACTIVITIES.map((a) => (
        <View key={a.title} style={styles.actCard}>
          <View style={styles.actIcon}>
            <Ionicons name={a.icon as any} size={19} color="#5B4FE9" />
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.actHead}>
              <Text style={styles.actTitle}>{a.title}</Text>
            </View>
            <View style={styles.periodPill}>
              <Text style={styles.periodText}>{a.period}</Text>
            </View>
            <Text style={styles.actDesc}>{a.desc}</Text>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Ionicons name="sparkles" size={16} color="#5B4FE9" />
        <Text style={styles.footerText}>Thanks for getting to know me!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA" },
  sectionTitle: { fontSize: 17, fontWeight: "800", color: "#1F2145", marginBottom: 14 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  chip: {
    width: "31.5%",
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  chipIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  chipText: { fontSize: 11, fontWeight: "700", color: "#1F2145", textAlign: "center" },
  actCard: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  actIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#EEEDFD",
    alignItems: "center",
    justifyContent: "center",
  },
  actHead: { flexDirection: "row", alignItems: "center" },
  actTitle: { flex: 1, fontSize: 14, fontWeight: "800", color: "#1F2145" },
  periodPill: {
    alignSelf: "flex-start",
    backgroundColor: "#EEEDFD",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
    marginTop: 5,
  },
  periodText: { fontSize: 10, fontWeight: "700", color: "#5B4FE9" },
  actDesc: { fontSize: 12, color: "#6B7280", marginTop: 7, lineHeight: 18 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 22,
    paddingVertical: 14,
  },
  footerText: { fontSize: 13, fontWeight: "700", color: "#5B4FE9" },
});