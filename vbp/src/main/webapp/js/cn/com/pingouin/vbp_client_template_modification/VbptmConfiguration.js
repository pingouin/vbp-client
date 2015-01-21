/**
 * 批量打印的配置
 */
Ext.define(//
    'cn.com.pingouin.vbp_client_template_modification.VbptmConfiguration'//
    , {
      
      extend : '',
      
      config : {
        basicSetting : {
          printTemplateId : '',// 打印模板id
          backgroudPictureUrl : '',// 底图URL,空字符串或者null表示无底图
          callbackUrl : '',// 回调URL,空字符串或者null表示不需要回调
          templateSaveCallBackUrl : '',// 模板保存回调URL
          templateSaveAsCallBackUrl : '',// 模板另存为回调URL
          dataPropertyForId : 'id',// 用作标识主键的数据属性
          dataPropertyForName : 'name',// 用作标识名称的数据属性
          idMinValue : 2,// 当前所有打印数据的编号最小值（用于打印范围控制）
          idMaxValue : 4,// 当前所有打印数据的编号最大值（用于打印范围控制）
          paperType : '',// 纸张类型(A4,B5...)
          paperWidth : '25',// 纸张宽度(cm)
          paperHeight : '20',// 纸张高度(cm)
          printOrientation : '',// 打印方向(landscape,portrait)
          printOffsetX : '-0.4',// 正数时向右偏移,负数时向左偏移
          printOffsetY : '-0.8',// 正数时向下偏移,负数时向上偏移
          valueFetchExpressions : [{name : '名称', value : 'name'}, {name : '电邮', value : 'email'}, {name : '电话', value : 'phone'}],// 漂浮框可选的取值表达式
          //
          nothing : null
        },
        templatePropertySetting : {
        	templateName : '测试模板',
        	templateType : 'normalTemplate',
        	supportedTemplateTypes : [{name : '普通模板', value : 'normalTemplate'}, {name : '发票模板', value : 'factureTemplate'}, {name : '证书模板', value : 'degreeTemplate'}],
        	//
        	nothing : null
        },
        floatDivisionSettings : [{
              id : '1',// 主键/唯一编号
              x : '9.5',// 相对坐标X
              y : '4.8',// 相对坐标Y
              width : '3.5',// 宽度
              height : '1',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'Georgia',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : 'bold',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'name',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '2',// 主键/唯一编号
              x : '9.5',// 相对坐标X
              y : '7',// 相对坐标Y
              width : '3.5',// 宽度
              height : '1',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : 'bold',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'email',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '3',// 主键/唯一编号
              x : '10',// 相对坐标X
              y : '9.5',// 相对坐标Y
              width : '3.5',// 宽度
              height : '1',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'phone',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '4',// 主键/唯一编号
              x : '12.5',// 相对坐标X
              y : '13.6',// 相对坐标Y
              width : '6.5',// 宽度
              height : '1',// 高度
              type : 'dynamic_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '20px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'memo',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '5',// 主键/唯一编号
              x : '18.6',// 相对坐标X
              y : '3.2',// 相对坐标Y
              width : '3',// 宽度
              height : '4.2',// 高度
              type : 'picture', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '16px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : 'picture',// 取值表达式(仅适用于dynamic_text类型)
              pictureUrl : '',// 图片URL(仅适用于picture类型)
              //
              nothing : null
            }, {
              id : '6',// 主键/唯一编号
              x : '15.5',// 相对坐标X
              y : '15.6',// 相对坐标Y
              width : '6.5',// 宽度
              height : '1',// 高度
              type : 'static_text', // 类型(dynamic_text;static_text;picture)
              style : {
                "font-family" : 'arial',// 字体
                "font-size" : '20px',// 字号
                "font-weight" : '',// 加粗
                //
                nothing : null
              },// CSS样式
              valueFetchExpression : '1111111111',// 取值表达式(仅适用于dynamic_text类型)
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
