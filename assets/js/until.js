/* eslint-disable prettier/prettier */
export const formatTime = (value, format) => {
  // eslint-disable-next-line camelcase
  let dateTime, yy, mm, dd, hh, MM, ss, am_pm, AM_PM, WK
  value = Number(value);
  format = format || 'yy-mm-dd hh:MM:ss WK';
  const weekDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  // 时间戳不为数字类型，返回空
  if (!value) {
    return '';
  }

  dateTime = new Date(value);
  yy = dateTime.getFullYear();
  mm = dateTime.getMonth() + 1;
  dd = dateTime.getDate();
  hh = dateTime.getHours();
  MM = dateTime.getMinutes();
  ss = dateTime.getSeconds();
  WK = weekDay[dateTime.getDay()];
  //是否显示上午和下午
  if (format.indexOf('am/pm') > -1) {
    am_pm = hh > 12 ? '下午' : '上午'
    hh = hh > 12 ? hh - 12 : hh;
  }

  //是否显示AM和PM
  if (format.indexOf('AM/PM') > -1) {
    AM_PM = hh > 12 ? 'AM' : 'PM';
    hh = hh > 12 ? hh - 12 : hh;
  }

  format = format.replace('yy', yy) // 年
  format = format.replace('mm', mm < 10 ? '0' + mm : mm) // 月
  format = format.replace('dd', dd < 10 ? '0' + dd : dd);		//日
  format = format.replace('hh', hh < 10 ? '0' + hh : hh);		//时
  format = format.replace('MM', MM < 10 ? '0' + MM : MM);		//分
  format = format.replace('ss', ss < 10 ? '0' + ss : ss);		//秒
  format = format.replace('am/pm', am_pm);		                //上午、下午
  format = format.replace('AM/PM', AM_PM);		                //AM、PM
  format = format.replace('WK', WK);		                //WK

  return format;
}