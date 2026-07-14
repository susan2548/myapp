import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const INFO = [
  { icon: "person-outline", label: "Full Name", value: "Supasan Anantasiri" },
  { icon: "calendar-outline", label: "Date of Birth", value: "1 December 2005" },
  { icon: "location-outline", label: "Hometown", value: "Phetchaburi, Thailand" },
  { icon: "mail-outline", label: "Email", value: "s6702041610231@email.kmutnb.ac.th" },
  { icon: "logo-github", label: "GitHub", value: "github.com/susan2548" },
  { icon: "language-outline", label: "Languages", value: "Thai, English" },
];

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarRing}>
          <Image
            source={require("../../../assets/images/profile.jpg")}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Supasan Anantasiri</Text>
        <Text style={styles.role}>Computer Education</Text>
        <View style={styles.badge}>
          <Ionicons name="school" size={13} color="#5B4FE9" />
          <Text style={styles.badgeText}>KMUTNB</Text>
        </View>
      </View>

      {/* Quote */}
      <ImageBackground
        source={require("../../../assets/images/roam.webp")}
        style={styles.quoteBox}
        imageStyle={styles.quoteBgImage}
        resizeMode="cover"
      >
        <View style={styles.quoteOverlay}>
          <Ionicons name="chatbubble-ellipses" size={18} color="#5B4FE9" />
          <Text style={styles.quote}>
            &quot;Like I told you last semester, all roads lead to Rome, Grade A
            is always mine.&quot;
          </Text>
        </View>
      </ImageBackground>

      {/* Basic Info */}
      <Text style={styles.sectionTitle}>Basic Information</Text>
      <View style={styles.card}>
        {INFO.map((item, i) => (
          <View
            key={item.label}
            style={[styles.row, i !== INFO.length - 1 && styles.rowBorder]}
          >
            <View style={styles.iconBox}>
              <Ionicons name={item.icon as any} size={18} color="#5B4FE9" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>3</Text>
          <Text style={styles.statLabel}>Year (Jail)</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>2.98</Text>
          <Text style={styles.statLabel}>GPAX</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>8+</Text>
          <Text style={styles.statLabel}>Projects (AI 100%)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#5B4FE9",
    alignItems: "center",
    paddingTop: 28,
    paddingBottom: 34,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  avatarRing: {
    padding: 4,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#fff",
    resizeMode: "cover",
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    marginTop: 14,
  },
  role: {
    fontSize: 14,
    color: "#DDD9FF",
    marginTop: 4,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5B4FE9",
  },
  quoteBox: {
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 14,
    overflow: "hidden",
    borderLeftWidth: 4,
    borderLeftColor: "#5B4FE9",
  },
  quoteBgImage: {
    opacity: 0.45,
    borderRadius: 14,
  },
  quoteOverlay: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "rgba(238,237,253,0.45)",
    padding: 14,
  },
  quote: {
    flex: 1,
    fontSize: 13,
    color: "#3A3A5C",
    lineHeight: 20,
    fontStyle: "italic",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F2145",
    marginTop: 24,
    marginBottom: 10,
    marginHorizontal: 18,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 16,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    gap: 12,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F5",
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EEEDFD",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "600",
  },
  value: {
    fontSize: 14,
    color: "#1F2145",
    fontWeight: "600",
    marginTop: 2,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 16,
    marginTop: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 16,
    elevation: 2,
  },
  statNum: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5B4FE9",
  },
  statLabel: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "600",
    marginTop: 3,
  },
});