/**
 * 批量打印的配置
 */
Ext.define( // 现金报销申请模板
    'cn.com.pingouin.vbp_client_samples.xian_jin_bao_xiao_shen_qing.VbpConfiguration'//
    , {
      
      extend : '',
      
      config : {
        basicSetting : {
          backgroudPictureUrl : 'images/xian_jin_bao_xiao_shen_qing/xian_jin_bao_xiao_shen_qing_di_tu.png',// 底图URL,空字符串或者null表示无底图
          callbackUrl : '',// 回调URL,空字符串或者null表示不需要回调
          dataPropertyForId : 'id',// 用作标识主键的数据属性
          dataPropertyForName : 'shenQingRen',// 用作标识名称的数据属性
          idMinValue : 1,// 当前所有打印数据的编号最小值（用于打印范围控制）
          idMaxValue : 4,// 当前所有打印数据的编号最大值（用于打印范围控制）
          paperType : '',// 纸张类型(A4,B5...)
          paperWidth : '20.7',// 纸张宽度(cm)
          paperHeight : '11.7',// 纸张高度(cm)
          printOrientation : 'portrait',// 打印方向(landscape,portrait)
          printOffsetX : '-0.3',// 正数时向右偏移,负数时向左偏移
          printOffsetY : '-0.3',// 正数时向下偏移,负数时向上偏移
          //
          nothing : null
        },
        floatDivisionSettings : [{
              id : '1',// 主键/唯一编号
              x : '3.8',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '2.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'shenQingRen',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '2',// 主键/唯一编号
              x : '8.05',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '2.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'yuanGongHao',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '3',// 主键/唯一编号
              x : '12.45',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '3.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'buMen',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '4',// 主键/唯一编号
              x : '15.75',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '1',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'riQiNian',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '5',// 主键/唯一编号
              x : '17.15',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '0.7',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'riQiYue',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '6',// 主键/唯一编号
              x : '18.25',// 相对坐标X
              y : '1.92',// 相对坐标Y
              width : '0.7',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'riQiRi',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '7',// 主键/唯一编号
              x : '1.92',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '1.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'feiYongBianHao_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '8',// 主键/唯一编号
              x : '3.9',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '2.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'zhaiYao_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '9',// 主键/唯一编号
              x : '8.5',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '6.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'chengBenZhongXin_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '10',// 主键/唯一编号
              x : '13.35',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEWan_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '11',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEQian_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '12',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEBai_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '13',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEShi_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '14',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEYuan_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '15',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEJiao_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '16',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '3.8',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEFen_1',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '17',// 主键/唯一编号
              x : '1.92',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '1.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'feiYongBianHao_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '18',// 主键/唯一编号
              x : '3.9',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '2.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'zhaiYao_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '19',// 主键/唯一编号
              x : '8.5',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '6.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'chengBenZhongXin_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '20',// 主键/唯一编号
              x : '13.35',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEWan_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '21',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEQian_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '22',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEBai_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '23',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEShi_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '24',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEYuan_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '25',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEJiao_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '26',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '4.7',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEFen_2',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '27',// 主键/唯一编号
              x : '1.92',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '1.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'feiYongBianHao_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '28',// 主键/唯一编号
              x : '3.9',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '2.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'zhaiYao_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '29',// 主键/唯一编号
              x : '8.5',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '6.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'chengBenZhongXin_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '30',// 主键/唯一编号
              x : '13.35',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEWan_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '31',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEQian_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '32',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEBai_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '33',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEShi_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '34',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEYuan_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '35',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEJiao_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '36',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '5.6',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEFen_3',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '37',// 主键/唯一编号
              x : '1.92',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '1.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'feiYongBianHao_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '38',// 主键/唯一编号
              x : '3.9',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '2.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'zhaiYao_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '39',// 主键/唯一编号
              x : '8.5',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '6.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'chengBenZhongXin_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '40',// 主键/唯一编号
              x : '13.35',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEWan_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '41',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEQian_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '42',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEBai_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '43',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEShi_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '44',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEYuan_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '45',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEJiao_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '46',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '6.5',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEFen_4',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '47',// 主键/唯一编号
              x : '1.92',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '1.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'feiYongBianHao_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '48',// 主键/唯一编号
              x : '3.9',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '2.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'zhaiYao_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '49',// 主键/唯一编号
              x : '8.5',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '6.0',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'chengBenZhongXin_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '50',// 主键/唯一编号
              x : '13.35',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEWan_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '51',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEQian_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '52',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEBai_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '53',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEShi_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '54',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEYuan_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '55',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEJiao_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '56',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '7.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'jinEFen_5',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '57',// 主键/唯一编号
              x : '6.8',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieWan',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '58',// 主键/唯一编号
              x : '7.7',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieQian',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '59',// 主键/唯一编号
              x : '8.6',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieBai',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '60',// 主键/唯一编号
              x : '9.6',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieShi',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '61',// 主键/唯一编号
              x : '10.5',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieYuan',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '62',// 主键/唯一编号
              x : '11.5',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieJiao',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '63',// 主键/唯一编号
              x : '12.4',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiDaXieFen',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '64',// 主键/唯一编号
              x : '13.45',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEWan',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '65',// 主键/唯一编号
              x : '13.7',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEQian',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '66',// 主键/唯一编号
              x : '14.1',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEBai',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '67',// 主键/唯一编号
              x : '14.45',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEShi',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '68',// 主键/唯一编号
              x : '14.75',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEYuan',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '69',// 主键/唯一编号
              x : '15.15',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEJiao',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '70',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '8.4',// 相对坐标Y
              width : '0.3',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '12px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'heJiJinEFen',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '71',// 主键/唯一编号
              x : '19.5',// 相对坐标X
              y : '6.0',// 相对坐标Y
              width : '0.5',// 宽度
              height : '0.5',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'fuJian',// 取值表达式(仅适用于dynamic_text类型)
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
