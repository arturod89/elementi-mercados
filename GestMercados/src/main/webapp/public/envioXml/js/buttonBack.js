/*!
 * Back Button Detection Object V 1.0.1
 * Plugins para detectar el eveno back en los navegadores.
 * BY: ROD & MEG
 * SOURCE:  http://www.brookebryan.com/
 */

var bajb_backdetect = {
        Version : '1.0.0',
        Description : 'Back Button Detection',
        Browser : {
                IE : !!(window.attachEvent && !window.opera),
                Safari : navigator.userAgent.indexOf('Apple') > -1,
                Opera : !!window.opera
        },
        FrameLoaded : 0,
        FrameTry : 0,
        FrameTimeout : null,
        OnBack : function() {
                return false;
        },
        BAJBFrame : function() {
                document.getElementById('BAJBOnBack');
                if (bajb_backdetect.FrameLoaded > 1 && bajb_backdetect.FrameLoaded === 2) {
                                bajb_backdetect.OnBack();
                                if(history.forward(1)){
                                	location.replace(history.forward(1));
                                	}
                                return true;
                                //history.back();
                }
                bajb_backdetect.FrameLoaded++;
                if (bajb_backdetect.FrameLoaded === 1) {
                        if (bajb_backdetect.Browser.IE) {
                                bajb_backdetect.SetupFrames();
                        } else {
                                bajb_backdetect.FrameTimeout = setTimeout(
                                                "bajb_backdetect.SetupFrames();", 700);
                                if(history.forward(1)){
                                	location.replace(history.forward(1));
                                	}
                        }
                }
        },
        SetupFrames : function() {
                clearTimeout(bajb_backdetect.FrameTimeout);
                var BBiFrame = document.getElementById('BAJBOnBack');
                var checkVar = BBiFrame.src.substr(-11, 11);
                if (bajb_backdetect.FrameLoaded === 1 && checkVar !== "HistoryLoad") {
                        BBiFrame.src = "#";
                } else {
                        if (bajb_backdetect.FrameTry < 2 && checkVar !== "HistoryLoad") {
                                bajb_backdetect.FrameTry++;
                                bajb_backdetect.FrameTimeout = setTimeout(
                                                "bajb_backdetect.SetupFrames();", 
                                                100);
                                if(history.forward(1))
                                	{
                                	location.replace(history.forward(1));
                                	}
                        }
                }
        },
        SafariHash : 'false',
        Safari : function() {
                if (bajb_backdetect.SafariHash === 'false') {
                        if (window.location.hash === '#b') {
                                bajb_backdetect.SafariHash = 'true';
                        } else {
                                window.location.hash = '#b';
                        }
                        setTimeout("bajb_backdetect.Safari();", 100);
                } else if (bajb_backdetect.SafariHash === 'true') {
                        if (window.location.hash === '') {
                                bajb_backdetect.SafariHash = 'back';
                                bajb_backdetect.OnBack();
                                if(history.forward(1)){
                                	location.replace(history.forward(1));
                                	}
                                return true;
                               // history.back();
                        } else {
                                setTimeout("bajb_backdetect.Safari();", 100);
                                if(history.forward(1)){
                                	location.replace(history.forward(1));
                                	}
                        }
                }
        },
        Initialise : function() {
                if (bajb_backdetect.Browser.Safari) {
                        setTimeout("bajb_backdetect.Safari();", 100);
                        if(history.forward(1)){
                        	location.replace(history.forward(1));
                        	}
                } else {
                        document
                        .write('<iframe src="#" style="display:none;" id="BAJBOnBack" onunload="alert(\'de\')" onload="bajb_backdetect.BAJBFrame();"></iframe>');
                        if(history.forward(1)){
                        	location.replace(history.forward(1));
                        	}
                }
        }
};
bajb_backdetect.Initialise();