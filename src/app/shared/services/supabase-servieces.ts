import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseServieces {
  supabase = createClient(
    'https://yulegzglfgzllxfnvknx.supabase.co',
    'sb_publishable_9kmgTaT3EPexaCCJZRWaSw_wICL-zUj',
  );
  async getSurveys() {    const { data, error } = await this.supabase.from('surveys').select('*');

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }

  async getSurveyById(id: number) {
    const { data, error } = await this.supabase.from('surveys').select('*').eq('id', id).single();
    return data;
  }

  async getQuestionsById(id: number) {
    const { data, error } = await this.supabase
      .from('questions')
      .select('*')
      .eq('survey_id', id)
      .order('id', { ascending: true });
    return data;
  }

  async getAnswersById(survey_id: number) {
    const { data, error } = await this.supabase
      .from('answers')
      .select('*')
      .eq('survey_id', survey_id)
      .order('id', { ascending: true });

    return data;
  }
}
