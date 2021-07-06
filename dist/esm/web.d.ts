import { WebPlugin } from '@capacitor/core';
import type { BarcodeScannerPlugin, CheckPermissionOptions, CheckPermissionResult, ScanOptions, ScanResult, StopScanOptions } from './definitions';
export declare class BarcodeScannerWeb extends WebPlugin implements BarcodeScannerPlugin {
    prepare(): Promise<void>;
    hideBackground(): Promise<void>;
    showBackground(): Promise<void>;
    enableTorch(): Promise<void>;
    disableTorch(): Promise<void>;
    startScan(_options: ScanOptions): Promise<ScanResult>;
    stopScan(_options?: StopScanOptions): Promise<void>;
    checkPermission(_options: CheckPermissionOptions): Promise<CheckPermissionResult>;
    openAppSettings(): Promise<void>;
}
