/**
 * 批量打印的配置
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.VbpConfiguration'//
    , {
      
      extend : '',
      
      config : {
        basicSetting : {
          backgroudPictureUrl : '',// 底图URL,空字符串或者null表示无底图
          callbackUrl : '',// 回调URL,空字符串或者null表示不需要回调
          dataPropertyForId : 'id',// 用作标识主键的数据属性
          dataPropertyForName : 'name',// 用作标识名称的数据属性
          idMinValue : 1,// 当前所有打印数据的编号最小值（用于打印范围控制）
          idMaxValue : 4,// 当前所有打印数据的编号最大值（用于打印范围控制）
          paperType : '',// 纸张类型(A4,B5...)
          paperWidth : '',// 纸张宽度(cm)
          paperHeight : '',// 纸张高度(cm)
          printOrientation : '',// 打印方向(landscape,portrait)
          printOffsetX : '',// 正数时向右偏移,负数时向左偏移
          printOffsetY : '',// 正数时向下偏移,负数时向上偏移
          //
          nothing : null
        },
        floatDivisionSettings : [{
              id : '',// 主键/唯一编号
              x : '',// 相对坐标X
              y : '',// 相对坐标Y
              width : '',// 宽度
              height : '',// 高度
              type : '', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : '',// 字体
                "font-size" : '',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : '',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }],
        //
        nothing : null
      },
      
      //
      nothing : null
    }//
);
