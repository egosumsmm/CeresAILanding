export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      signups: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          payment_status: string | null
          stripe_customer_id: string | null
          subscription_plan: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          payment_status?: string | null
          stripe_customer_id?: string | null
          subscription_plan?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          payment_status?: string | null
          stripe_customer_id?: string | null
          subscription_plan?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      signupswarm: {
        Row: {
          created_at: string | null
          email: string
        }
        Insert: {
          created_at?: string | null
          email: string
        }
        Update: {
          created_at?: string | null
          email?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          end_date: string | null
          id: string
          start_date: string | null
          status: string
          stripe_subscription_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status: string
          stripe_subscription_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_date?: string | null
          id?: string
          start_date?: string | null
          status?: string
          stripe_subscription_id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          has_lifetime_access: boolean | null
          id: string
        }
        Insert: {
          email: string
          has_lifetime_access?: boolean | null
          id?: string
        }
        Update: {
          email?: string
          has_lifetime_access?: boolean | null
          id?: string
        }
        Relationships: []
      }
      whatsapp_user_insights: {
        Row: {
          average_response_time: unknown | null
          created_at: string | null
          day_percentage: number | null
          double_texts_per_user: Json | null
          first_valid_message_2024: Json | null
          has_paid: boolean
          id: string
          longest_streak: number | null
          love_you_winner: string | null
          messages: number | null
          messages_per_user: Json | null
          most_active_day: string | null
          most_active_day_message_count: number | null
          most_active_hour: number | null
          most_common_message: string | null
          most_common_message_count: number | null
          most_frequent_slur: string | null
          night_percentage: number | null
          other_person: string | null
          other_person_messages_2023: number | null
          other_person_messages_2024: number | null
          other_person_most_used_emoji: string | null
          sorry_winner: string | null
          thank_you_winner: string | null
          top_20_words: Json | null
          user_id: string
          year: number
          your_messages_2023: number | null
          your_messages_2024: number | null
          your_most_used_emoji: string | null
          your_name: string | null
        }
        Insert: {
          average_response_time?: unknown | null
          created_at?: string | null
          day_percentage?: number | null
          double_texts_per_user?: Json | null
          first_valid_message_2024?: Json | null
          has_paid?: boolean
          id?: string
          longest_streak?: number | null
          love_you_winner?: string | null
          messages?: number | null
          messages_per_user?: Json | null
          most_active_day?: string | null
          most_active_day_message_count?: number | null
          most_active_hour?: number | null
          most_common_message?: string | null
          most_common_message_count?: number | null
          most_frequent_slur?: string | null
          night_percentage?: number | null
          other_person?: string | null
          other_person_messages_2023?: number | null
          other_person_messages_2024?: number | null
          other_person_most_used_emoji?: string | null
          sorry_winner?: string | null
          thank_you_winner?: string | null
          top_20_words?: Json | null
          user_id: string
          year: number
          your_messages_2023?: number | null
          your_messages_2024?: number | null
          your_most_used_emoji?: string | null
          your_name?: string | null
        }
        Update: {
          average_response_time?: unknown | null
          created_at?: string | null
          day_percentage?: number | null
          double_texts_per_user?: Json | null
          first_valid_message_2024?: Json | null
          has_paid?: boolean
          id?: string
          longest_streak?: number | null
          love_you_winner?: string | null
          messages?: number | null
          messages_per_user?: Json | null
          most_active_day?: string | null
          most_active_day_message_count?: number | null
          most_active_hour?: number | null
          most_common_message?: string | null
          most_common_message_count?: number | null
          most_frequent_slur?: string | null
          night_percentage?: number | null
          other_person?: string | null
          other_person_messages_2023?: number | null
          other_person_messages_2024?: number | null
          other_person_most_used_emoji?: string | null
          sorry_winner?: string | null
          thank_you_winner?: string | null
          top_20_words?: Json | null
          user_id?: string
          year?: number
          your_messages_2023?: number | null
          your_messages_2024?: number | null
          your_most_used_emoji?: string | null
          your_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
