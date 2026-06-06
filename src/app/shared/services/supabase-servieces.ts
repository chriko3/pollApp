import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel } from '@supabase/supabase-js'

@Injectable({
  providedIn: 'root',
})
export class SupabaseServieces {

  supabase = createClient('https://yulegzglfgzllxfnvknx.supabase.co', 'sb_publishable_9kmgTaT3EPexaCCJZRWaSw_wICL-zUj')
  async logData() {
    let { data: surveys, error } = await this.supabase
      .from('surveys')
      .select('*')

    if (!surveys) {
      return;
    }
    else {
      console.log(surveys);
    }
  }
}
