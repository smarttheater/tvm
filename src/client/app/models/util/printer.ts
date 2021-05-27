/**
 * 接続の種類
 */
export enum ConnectionType {
    /**
     * なし
     */
    'None' = 'None',
    /**
     * 画像
     */
    'Image' = 'Image',
    /**
     * スター精密 LAN接続
     */
    'StarLAN' = 'StarLAN',
    /**
     * スター精密 Bluetooth接続
     */
    'StarBluetooth' = 'StarBluetooth',
    /**
     * Epson ePOS
     */
    'EpsonEPOS' = 'EpsonEPOS',
}

/**
 * プリンター一覧
 */
export const printers = [
    {
        connectionType: ConnectionType.None,
        name: 'setting.device.printType.none',
    },
    {
        connectionType: ConnectionType.Image,
        name: 'setting.device.printType.image',
    },
    {
        connectionType: ConnectionType.StarLAN,
        name: 'setting.device.printType.starLAN',
    },
    {
        connectionType: ConnectionType.StarBluetooth,
        name: 'setting.device.printType.starBluetooth',
    },
    {
        connectionType: ConnectionType.EpsonEPOS,
        name: 'setting.device.printType.epsonEPOS',
    },
];

export interface IPrinter {
    connectionType: ConnectionType;
    ipAddress: string;
}
