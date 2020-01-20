import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionNotificationService } from '../../services/action-notification.service';
import { ConfigService } from '../../services/config.service';
import { PreferencesService } from '../../services/preferences.service';

@NgModule({})
export class SharedServicesModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [ActionNotificationService, ConfigService, PreferencesService]
    };
  }
 }

export const SharedComponents = [];
