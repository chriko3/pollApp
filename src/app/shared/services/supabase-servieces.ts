import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root',
})
export class SupabaseServieces {

  supabase = createClient('https://yulegzglfgzllxfnvknx.supabase.co', 'sb_publishable_9kmgTaT3EPexaCCJZRWaSw_wICL-zUj')
  async getSurveys() {
    const channels = this.supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'surveys' },
        (payload) => {
          console.log('Change received!', payload)
        }
      )
      .subscribe()
      
    const { data, error } = await this.supabase
      .from('surveys')
      .select('*');

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  }


}
