import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../../theme'
import { useApiHealth } from '../hooks/useApiHealth'

export function WelcomeScreen() {
  const health = useApiHealth()
  const status = health.isPending
    ? '正在连接服务…'
    : health.isError
      ? '服务暂时无法连接'
      : '服务连接成功'

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.brand}>
          <Image
            source={require('../../../../assets/fox-logo.png')}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="Mealora 小狐狸"
          />
          <Text style={styles.title}>Mealora</Text>
          <Text style={styles.description}>记录每一餐，照顾每一天。</Text>
        </View>
        <Text accessibilityRole="header" style={styles.heading}>
          开发工程已初始化
        </Text>
        <Text style={[styles.status, health.isError && styles.error]}>
          {status}
        </Text>
        <Text style={styles.description}>
          记餐与个人信息功能将在后续开发中加入。
        </Text>
        <Pressable
          accessibilityRole="button"
          disabled={health.isFetching}
          onPress={() => void health.refetch()}
          style={({ pressed }) => [
            styles.button,
            (pressed || health.isFetching) && styles.buttonMuted,
          ]}
        >
          <Text style={styles.buttonText}>
            {health.isFetching ? '连接中…' : '重新检查连接'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.canvas },
  content: {
    flexGrow: 1,
    padding: theme.spacing.large,
    justifyContent: 'center',
    gap: 16,
  },
  brand: { alignItems: 'center', marginBottom: theme.spacing.large, gap: 8 },
  logo: { width: 112, height: 112 },
  title: { fontSize: 36, fontWeight: '700', color: theme.colors.ink },
  heading: { fontSize: 24, fontWeight: '600', color: theme.colors.ink },
  description: { fontSize: 16, lineHeight: 24, color: theme.colors.secondary },
  status: { fontSize: 16, color: theme.colors.ink },
  error: { color: theme.colors.error },
  button: {
    minHeight: 48,
    padding: 14,
    borderRadius: 14,
    backgroundColor: theme.colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMuted: { opacity: 0.65 },
  buttonText: { fontSize: 16, fontWeight: '600', color: theme.colors.ink },
})
