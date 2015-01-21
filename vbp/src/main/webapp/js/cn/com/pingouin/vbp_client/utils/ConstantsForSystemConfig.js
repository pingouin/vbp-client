/**
 * 系统配置常量类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.utils.ConstantsForSystemConfig'//
    , {
      
      statics : {
        
        // 打印状态返回的策略（针对不同打印机需要实际测试来决定此策略），此策略决定数据最终的打印状态：true表示根据真实打印机返回的状态值；false表示只要成功调用打印机的接口即可，无论打印机的状态返回什么
        processPrintStatusByRealPrinter : true,
        
        defaultTimeoutMillisecondsForAjax : 60 * 60 * 1000,
        
        //
        nothing : null
        
      },
      
      //
      nothing : null
    }//
);
