THK.thk_kyouzai_setup()
let 投入数 = 0
let ボトルの種類 = ["", "", ""]
THK.thk_servo(THK.Servos.Motor1, 0)
THK.thk_servo(THK.Servos.Motor1, 0)
THK.thk_servo(THK.Servos.Motor1, 0)
basic.forever(function () {
    // 配列へ記録
    if (THK.is_getDigitalSensor(THK.SensorS.P1)) {
        ボトルの種類[投入数] = "ペットボトル"
        投入数 += 1
    } else if (THK.is_getDigitalSensor(THK.SensorS.P8)) {
        ボトルの種類[投入数] = "スチール"
        投入数 += 1
    } else if (THK.is_getDigitalSensor(THK.SensorS.P13)) {
        ボトルの種類[投入数] = "アルミ"
        投入数 += 1
    }
    // 3個入ったら３回分別処理を繰り返す
    if (投入数 >= 3) {
        for (let カウンター = 0; カウンター <= 2; カウンター++) {
            if (ボトルの種類[カウンター] == "ペットボトル") {
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
            } else if (ボトルの種類[カウンター] == "アルミ") {
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
            } else if (ボトルの種類[カウンター] == "スチール") {
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
                THK.thk_servo(THK.Servos.Motor1, 0)
            }
            // 初期化処理
            投入数 = 0
            ボトルの種類 = ["", "", ""]
            THK.thk_servo(THK.Servos.Motor1, 0)
            THK.thk_servo(THK.Servos.Motor1, 0)
            THK.thk_servo(THK.Servos.Motor1, 0)
        }
    }
})
