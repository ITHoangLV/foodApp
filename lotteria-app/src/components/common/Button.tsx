import React from "react";
import { ActivityIndicator, Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, { container: ViewStyle; text: TextStyle }> = {
  primary: { container: { backgroundColor: "#2563EB" }, text: { color: "#FFFFFF" } },
  secondary: { container: { backgroundColor: "#10B981" }, text: { color: "#FFFFFF" } },
  ghost: {
    container: { backgroundColor: "transparent", borderWidth: 1, borderColor: "#2563EB" },
    text: { color: "#2563EB" },
  },
};

export function Button({
  label,
  variant = "primary",
  isLoading = false,
  disabled = false,
  onPress,
  style,
  textStyle,
}: ButtonProps) {
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const isDisabled = disabled || isLoading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.container,
        variantStyles.container,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
      android_ripple={{ color: "rgba(0,0,0,0.08)" }}
    >
      {isLoading ? <ActivityIndicator style={{ marginRight: 8 }} color={variantStyles.text.color || "#fff"} /> : null}
      <Text style={[styles.label, variantStyles.text, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.85,
  },
});
