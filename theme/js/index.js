(function ($) {
    var bots = [
        {
            "pattern": "Googlebot\\/",
            "url": "http://www.google.com/bot.html"
        },
        {
            "pattern": "Googlebot-Mobile"
        },
        {
            "pattern": "Googlebot-Image"
        },
        {
            "pattern": "Googlebot-News"
        },
        {
            "pattern": "Googlebot-Video"
        },
        {
            "pattern": "AdsBot-Google",
            "url": "https://support.google.com/webmasters/answer/1061943?hl=en"
        },
        {
            "pattern": "Mediapartners-Google",
            "url": "https://support.google.com/webmasters/answer/1061943?hl=en"
        },
        {
            "pattern": "bingbot",
            "url": "http://www.bing.com/bingbot.htm"
        },
        {
            "pattern": "slurp",
            "url": "http://help.yahoo.com/help/us/ysearch/slurp"
        },
        {
            "pattern": "java"
        },
        {
            "pattern": "wget"
        },
        {
            "pattern": "curl"
        },
        {
            "pattern": "Commons-HttpClient"
        },
        {
            "pattern": "Python-urllib"
        },
        {
            "pattern": "libwww"
        },
        {
            "pattern": "httpunit"
        },
        {
            "pattern": "nutch"
        },
        {
            "pattern": "Go-http-client",
            "addition_date": "2016/03/26",
            "url": "https://golang.org/pkg/net/http/",
            "instances": ["Go-http-client/1.1"]
        },
        {
            "pattern": "phpcrawl",
            "addition_date": "2012-09/17",
            "url": "http://phpcrawl.cuab.de/"
        },
        {
            "pattern": "msnbot",
            "url": "http://search.msn.com/msnbot.htm"
        },
        {
            "pattern": "jyxobot"
        },
        {
            "pattern": "FAST-WebCrawler"
        },
        {
            "pattern": "FAST Enterprise Crawler"
        },
        {
            "pattern": "biglotron"
        },
        {
            "pattern": "teoma"
        },
        {
            "pattern": "convera"
        },
        {
            "pattern": "seekbot"
        },
        {
            "pattern": "gigabot",
            "instances": ["Gigabot/1.0", "Gigabot/2.0 (http://www.gigablast.com/spider.html)", "Gigabot/2.0 (http://www.gigablast.com/spider.html)"],
            "url": "https://github.com/gigablast/open-source-search-engine"
        },
        {
            "pattern": "gigablast",
            "instances": ["GigablastOpenSource/1.0"],
            "url": "https://github.com/gigablast/open-source-search-engine"
        },
        {
            "pattern": "exabot"
        },
        {
            "pattern": "ngbot"
        },
        {
            "pattern": "ia_archiver"
        },
        {
            "pattern": "GingerCrawler"
        },
        {
            "pattern": "webmon "
        },
        {
            "pattern": "httrack"
        },
        {
            "pattern": "webcrawler"
        },
        {
            "pattern": "grub.org"
        },
        {
            "pattern": "UsineNouvelleCrawler"
        },
        {
            "pattern": "antibot"
        },
        {
            "pattern": "netresearchserver"
        },
        {
            "pattern": "speedy"
        },
        {
            "pattern": "fluffy"
        },
        {
            "pattern": "bibnum.bnf"
        },
        {
            "pattern": "findlink"
        },
        {
            "pattern": "msrbot"
        },
        {
            "pattern": "panscient"
        },
        {
            "pattern": "yacybot"
        },
        {
            "pattern": "AISearchBot"
        },
        {
            "pattern": "IOI"
        },
        {
            "pattern": "ips-agent"
        },
        {
            "pattern": "tagoobot"
        },
        {
            "pattern": "MJ12bot"
        },
        {
            "pattern": "dotbot"
        },
        {
            "pattern": "woriobot"
        },
        {
            "pattern": "yanga"
        },
        {
            "pattern": "buzzbot"
        },
        {
            "pattern": "mlbot"
        },
        {
            "pattern": "yandexbot",
            "url": "http://yandex.com/bots",
            "instances": ["Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)"],
            "addition_date": "2015/04/14"
        },
        {
            "pattern": "purebot",
            "addition_date": "2010/01/19"
        },
        {
            "pattern": "Linguee Bot",
            "addition_date": "2010/01/26",
            "url": "http://www.linguee.com/bot"
        },
        {
            "pattern": "Voyager",
            "addition_date": "2010/02/01",
            "url": "http://www.kosmix.com/crawler.html"
        },
        {
            "pattern": "CyberPatrol",
            "addition_date": "2010/02/11",
            "url": "http://www.cyberpatrol.com/cyberpatrolcrawler.asp"
        },
        {
            "pattern": "voilabot",
            "addition_date": "2010/05/18"
        },
        {
            "pattern": "baiduspider",
            "addition_date": "2010/07/15",
            "url": "http://www.baidu.jp/spider/"
        },
        {
            "pattern": "citeseerxbot",
            "addition_date": "2010/07/17"
        },
        {
            "pattern": "spbot",
            "addition_date": "2010/07/31",
            "url": "http://www.seoprofiler.com/bot"
        },
        {
            "pattern": "twengabot",
            "addition_date": "2010/08/03",
            "url": "http://www.twenga.com/bot.html"
        },
        {
            "pattern": "postrank",
            "addition_date": "2010/08/03",
            "url": "http://www.postrank.com"
        },
        {
            "pattern": "turnitinbot",
            "addition_date": "2010/09/26",
            "url": "http://www.turnitin.com"
        },
        {
            "pattern": "scribdbot",
            "addition_date": "2010/09/28",
            "url": "http://www.scribd.com"
        },
        {
            "pattern": "page2rss",
            "addition_date": "2010/10/07",
            "url": "http://www.page2rss.com"
        },
        {
            "pattern": "sitebot",
            "addition_date": "2010/12/15",
            "url": "http://www.sitebot.org"
        },
        {
            "pattern": "linkdex",
            "addition_date": "2011/01/06",
            "url": "http://www.linkdex.com"
        },
        {
            "pattern": "Adidxbot",
            "url": "http://onlinehelp.microsoft.com/en-us/bing/hh204496.aspx"
        },
        {
            "pattern": "blekkobot",
            "url": "http://blekko.com/about/blekkobot"
        },
        {
            "pattern": "ezooms",
            "addition_date": "2011/04/27",
            "url": "http://www.phpbb.com/community/viewtopic.php?f=64&t=935605&start=450#p12948289"
        },
        {
            "pattern": "dotbot",
            "addition_date": "2011/04/27"
        },
        {
            "pattern": "Mail.RU_Bot",
            "addition_date": "2011/04/27",
            "instances": [
                "Mozilla/5.0 (compatible; Linux x86_64; Mail.RU_Bot/2.0; +http://go.mail.ru/",
                "Mozilla/5.0 (compatible; Mail.RU_Bot/2.0; +http://go.mail.ru/"
            ]
        },
        {
            "pattern": "discobot",
            "addition_date": "2011/05/03",
            "url": "http://discoveryengine.com/discobot.html"
        },
        {
            "pattern": "heritrix",
            "addition_date": "2011/06/21",
            "url": "http://crawler.archive.org/"
        },
        {
            "pattern": "findthatfile",
            "addition_date": "2011/06/21",
            "url": "http://www.findthatfile.com/"
        },
        {
            "pattern": "europarchive.org",
            "addition_date": "2011/06/21",
            "url": ""
        },
        {
            "pattern": "NerdByNature.Bot",
            "addition_date": "2011/07/12",
            "url": "http://www.nerdbynature.net/bot"
        },
        {
            "pattern": "sistrix crawler",
            "addition_date": "2011/08/02"
        },
        {
            "pattern": "ahrefsbot",
            "addition_date": "2011/08/28"
        },
        {
            "pattern": "Aboundex",
            "addition_date": "2011/09/28",
            "url": "http://www.aboundex.com/crawler/"
        },
        {
            "pattern": "domaincrawler",
            "addition_date": "2011/10/21"
        },
        {
            "pattern": "wbsearchbot",
            "addition_date": "2011/12/21",
            "url": "http://www.warebay.com/bot.html"
        },
        {
            "pattern": "summify",
            "addition_date": "2012/01/04",
            "url": "http://summify.com"
        },
        {
            "pattern": "ccbot",
            "addition_date": "2012/02/05",
            "url": "http://www.commoncrawl.org/bot.html"
        },
        {
            "pattern": "edisterbot",
            "addition_date": "2012/02/25"
        },
        {
            "pattern": "seznambot",
            "addition_date": "2012/03/14"
        },
        {
            "pattern": "ec2linkfinder",
            "addition_date": "2012/03/22"
        },
        {
            "pattern": "gslfbot",
            "addition_date": "2012/04/03"
        },
        {
            "pattern": "aihitbot",
            "addition_date": "2012/04/16"
        },
        {
            "pattern": "intelium_bot",
            "addition_date": "2012/05/07"
        },
        {
            "pattern": "facebookexternalhit",
            "addition_date": "2012/05/07"
        },
        {
            "pattern": "yeti",
            "addition_date": "2012/05/07"
        },
        {
            "pattern": "RetrevoPageAnalyzer",
            "addition_date": "2012/05/07"
        },
        {
            "pattern": "lb-spider",
            "addition_date": "2012/05/07"
        },
        {
            "pattern": "sogou",
            "addition_date": "2012/05/13",
            "url": "http://www.sogou.com/docs/help/webmasters.htm#07"
        },
        {
            "pattern": "lssbot",
            "addition_date": "2012/05/15"
        },
        {
            "pattern": "careerbot",
            "addition_date": "2012/05/23",
            "url": "http://www.career-x.de/bot.html"
        },
        {
            "pattern": "wotbox",
            "addition_date": "2012/06/12",
            "url": "http://www.wotbox.com"
        },
        {
            "pattern": "wocbot",
            "addition_date": "2012/07/25",
            "url": "http://www.wocodi.com/crawler"
        },
        {
            "pattern": "ichiro",
            "addition_date": "2012/08/28",
            "url": "http://help.goo.ne.jp/help/article/1142"
        },
        {
            "pattern": "DuckDuckBot",
            "addition_date": "2012/09/19",
            "url": "http://duckduckgo.com/duckduckbot.html"
        },
        {
            "pattern": "lssrocketcrawler",
            "addition_date": "2012/09/24"
        },
        {
            "pattern": "drupact",
            "addition_date": "2012/09/27",
            "url": "http://www.arocom.de/drupact"
        },
        {
            "pattern": "webcompanycrawler",
            "addition_date": "2012/10/03"
        },
        {
            "pattern": "acoonbot",
            "addition_date": "2012/10/07",
            "url": "http://www.acoon.de/robot.asp"
        },
        {
            "pattern": "openindexspider",
            "addition_date": "2012/10/26",
            "url": "http://www.openindex.io/en/webmasters/spider.html"
        },
        {
            "pattern": "gnam gnam spider",
            "addition_date": "2012/10/31"
        },
        {
            "pattern": "web-archive-net.com.bot"
        },
        {
            "pattern": "backlinkcrawler",
            "addition_date": "2013/01/04"
        },
        {
            "pattern": "coccoc",
            "addition_date": "2013/01/04",
            "url": "http://help.coccoc.vn/"
        },
        {
            "pattern": "integromedb",
            "addition_date": "2013/01/10",
            "url": "http://www.integromedb.org/Crawler"
        },
        {
            "pattern": "content crawler spider",
            "addition_date": "2013/01/11"
        },
        {
            "pattern": "toplistbot",
            "addition_date": "2013/02/05"
        },
        {
            "pattern": "seokicks-robot",
            "addition_date": "2013/02/25"
        },
        {
            "pattern": "it2media-domain-crawler",
            "addition_date": "2013/03/12"
        },
        {
            "pattern": "ip-web-crawler.com",
            "addition_date": "2013/03/22"
        },
        {
            "pattern": "siteexplorer.info",
            "addition_date": "2013/05/01"
        },
        {
            "pattern": "elisabot",
            "addition_date": "2013/06/27"
        },
        {
            "pattern": "proximic",
            "addition_date": "2013/09/12",
            "url": "http://www.proximic.com/info/spider.php"
        },
        {
            "pattern": "changedetection",
            "addition_date": "2013/09/13",
            "url": "http://www.changedetection.com/bot.html"
        },
        {
            "pattern": "blexbot",
            "addition_date": "2013/10/03",
            "url": "http://webmeup-crawler.com/"
        },
        {
            "pattern": "arabot",
            "addition_date": "2013/10/09"
        },
        {
            "pattern": "WeSEE:Search",
            "addition_date": "2013/11/18"
        },
        {
            "pattern": "niki-bot",
            "addition_date": "2014/01/01"
        },
        {
            "pattern": "CrystalSemanticsBot",
            "addition_date": "2014/02/17",
            "url": "http://www.crystalsemantics.com/user-agent/"
        },
        {
            "pattern": "rogerbot",
            "addition_date": "2014/02/28",
            "url": "http://moz.com/help/pro/what-is-rogerbot-"
        },
        {
            "pattern": "360Spider",
            "addition_date": "2014/03/14",
            "url": "http://needs-be.blogspot.co.uk/2013/02/how-to-block-spider360.html"
        },
        {
            "pattern": "psbot",
            "addition_date": "2014/03/31",
            "url": "http://www.picsearch.com/bot.html"
        },
        {
            "pattern": "InterfaxScanBot",
            "addition_date": "2014/03/31",
            "url": "http://scan-interfax.ru"
        },
        {
            "pattern": "Lipperhey SEO Service",
            "addition_date": "2014/04/01",
            "url": "http://www.lipperhey.com/"
        },
        {
            "pattern": "CC Metadata Scaper",
            "addition_date": "2014/04/01",
            "url": "http://wiki.creativecommons.org/Metadata_Scraper"
        },
        {
            "pattern": "g00g1e.net",
            "addition_date": "2014/04/01",
            "url": "http://www.g00g1e.net/"
        },
        {
            "pattern": "GrapeshotCrawler",
            "addition_date": "2014/04/01",
            "url": "http://www.grapeshot.co.uk/crawler.php"
        },
        {
            "pattern": "urlappendbot",
            "addition_date": "2014/05/10",
            "url": "http://www.profound.net/urlappendbot.html"
        },
        {
            "pattern": "brainobot",
            "addition_date": "2014/06/24"
        },
        {
            "pattern": "fr-crawler",
            "addition_date": "2014/07/31",
            "instances": ["Mozilla/5.0 (compatible; fr-crawler/1.1)"]
        },
        {
            "pattern": "binlar",
            "addition_date": "2014/09/12",
            "instances": [
                "binlar_2.6.3 binlar2.6.3@unspecified.mail",
                "binlar_2.6.3 binlar_2.6.3@unspecified.mail",
                "binlar_2.6.3 larbin2.6.3@unspecified.mail",
                "binlar_2.6.3 phanendra_kalapala@McAfee.com",
                "binlar_2.6.3 test@mgmt.mic"
            ]
        },
        {
            "pattern": "SimpleCrawler",
            "addition_date": "2014/09/12",
            "instances": ["SimpleCrawler/0.1"]
        },
        {
            "pattern": "Livelapbot",
            "addition_date": "2014/09/12",
            "instances": ["Livelapbot/0.1"]
        },
        {
            "pattern": "Twitterbot",
            "addition_date": "2014/09/12",
            "instances": ["Twitterbot/0.1", "Twitterbot/1.0"]
        },
        {
            "pattern": "cXensebot",
            "addition_date": "2014/10/05",
            "instances": ["cXensebot/1.1a"],
            "url": "http://www.cxense.com/bot.html"
        },
        {
            "pattern": "smtbot",
            "addition_date": "2014/10/04",
            "instances": ["Mozilla/5.0 (compatible; SMTBot/1.0; +http://www.similartech.com/smtbo)t", "SMTBot (similartech.com/smtbot)"],
            "url": "http://www.similartech.com/smtbot"
        },
        {
            "pattern": "bnf.fr_bot",
            "addition_date": "2014/11/18",
            "url": "http://www.bnf.fr/fr/outils/a.dl_web_capture_robot.html",
            "instances": ["Mozilla/5.0 (compatible; bnf.fr_bot; +http://www.bnf.fr/fr/outils/a.dl_web_capture_robot.html)"]
        },
        {
            "pattern": "A6-Indexer",
            "addition_date": "2014/12/05",
            "url": "http://www.a6corp.com/a6-web-scraping-policy/",
            "instances": ["A6-Indexer"]
        },
        {
            "pattern": "ADmantX",
            "addition_date": "2014/12/05",
            "url": "http://www.admantx.com",
            "instances": ["ADmantX Platform Semantic Analyzer - ADmantX Inc. - www.admantx.com - support@admantx.com"]
        },
        {
            "pattern": "Facebot",
            "url": "https://developers.facebook.com/docs/sharing/best-practices#crawl",
            "addition_date": "2014/12/30"
        },
        {
            "pattern": "Twitterbot",
            "url": "https://dev.twitter.com/cards/getting-started",
            "addition_date": "2014/12/30"
        },
        {
            "pattern": "OrangeBot",
            "instances": ["Mozilla/5.0 (compatible; OrangeBot/2.0; support.orangebot@orange.com"],
            "addition_date": "2015/01/12"
        },
        {
            "pattern": "memorybot",
            "url": "http://mignify.com/bot.htm",
            "instances": ["Mozilla/5.0 (compatible; memorybot/1.21.14 +http://mignify.com/bot.html)"],
            "addition_date": "2015/02/01"
        },
        {
            "pattern": "AdvBot",
            "url": "http://advbot.net/bot.html",
            "instances": ["Mozilla/5.0 (compatible; AdvBot/2.0; +http://advbot.net/bot.html)"],
            "addition_date": "2015/02/01"
        },
        {
            "pattern": "MegaIndex",
            "url": "https://www.megaindex.ru/?tab=linkAnalyze",
            "instances": ["Mozilla/5.0 (compatible; MegaIndex.ru/2.0; +https://www.megaindex.ru/?tab=linkAnalyze)"],
            "addition_date": "2015/03/28"
        },
        {
            "pattern": "SemanticScholarBot",
            "url": "http://s2.allenai.org/bot.html",
            "instances": ["SemanticScholarBot/1.0 (+http://s2.allenai.org/bot.html)"],
            "addition_date": "2015/03/28"
        },
        {
            "pattern": "ltx71",
            "url": "http://ltx71.com/",
            "instances": ["ltx71 - (http://ltx71.com/)"],
            "addition_date": "2015/04/04"
        },
        {
            "pattern": "nerdybot",
            "url": "http://nerdybot.com/",
            "instances": ["nerdybot"],
            "addition_date": "2015/04/05"
        },
        {
            "pattern": "xovibot",
            "url": "http://www.xovibot.net/",
            "instances": ["Mozilla/5.0 (compatible; XoviBot/2.0; +http://www.xovibot.net/)"],
            "addition_date": "2015/04/05"
        },
        {
            "pattern": "BUbiNG",
            "url": "http://law.di.unimi.it/BUbiNG.html",
            "instances": ["BUbiNG (+http://law.di.unimi.it/BUbiNG.html)"],
            "addition_date": "2015/04/06"
        },
        {
            "pattern": "Qwantify",
            "url": "https://www.qwant.com/",
            "instances": ["Mozilla/5.0 (compatible; Qwantify/2.0n; +https://www.qwant.com/)/*"],
            "addition_date": "2015/04/06"
        },
        {
            "pattern": "archive.org_bot",
            "url": "http://www.archive.org/details/archive.org_bot",
            "instances": ["Mozilla/5.0 (compatible; archive.org_bot +http://www.archive.org/details/archive.org_bot)"],
            "addition_date": "2015/04/14"
        },
        {
            "pattern": "Applebot",
            "url": "http://www.apple.com/go/applebot",
            "addition_date": "2015/04/15"
        },
        {
            "pattern": "TweetmemeBot",
            "url": "http://datasift.com/bot.html",
            "instances": ["Mozilla/5.0 (TweetmemeBot/4.0; +http://datasift.com/bot.html) Gecko/20100101 Firefox/31.0"],
            "addition_date": "2015/04/15"
        },
        {
            "pattern": "crawler4j",
            "url": "https://github.com/yasserg/crawler4j",
            "instances": ["crawler4j (http://code.google.com/p/crawler4j/)"],
            "addition_date": "2015/05/07"
        },
        {
            "pattern": "findxbot",
            "url": "http://www.findxbot.com",
            "instances": ["Mozilla/5.0 (compatible; Findxbot/1.0; +http://www.findxbot.com)"],
            "addition_date": "2015/05/07"
        },
        {
            "pattern": "SemrushBot",
            "url": "http://www.semrush.com/bot.html",
            "instances": ["Mozilla/5.0 (compatible; SemrushBot/0.98~bl; +http://www.semrush.com/bot.html)"],
            "addition_date": "2015/05/26"
        },
        {
            "pattern": "yoozBot",
            "url": "http://yooz.ir",
            "instances": ["Mozilla/5.0 (compatible; yoozBot-2.2; http://yooz.ir; info@yooz.ir)"],
            "addition_date": "2015/05/26"
        },
        {
            "pattern": "lipperhey",
            "url": "http://www.lipperhey.com/",
            "instances": ["Mozilla/5.0 (compatible; Lipperhey Link Explorer; http://www.lipperhey.com/)", "Mozilla/5.0 (compatible; Lipperhey SEO Service; http://www.lipperhey.com/)", "Mozilla/5.0 (compatible; Lipperhey Site Explorer; http://www.lipperhey.com/)", "Mozilla/5.0 (compatible; Lipperhey-Kaus-Australis/5.0; +https://www.lipperhey.com/en/about/)"],
            "addition_date": "2015/08/26"
        },
        {
            "pattern": "y!j-asr",
            "url": "http://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/",
            "instances": ["Y!J-ASR/0.1 crawler (http://www.yahoo-help.jp/app/answers/detail/p/595/a_id/42716/)"],
            "addition_date": "2015/05/26"
        },
        {
            "pattern": "Domain Re-Animator Bot",
            "url": "http://domainreanimator.com",
            "instances": ["Domain Re-Animator Bot (http://domainreanimator.com) - support@domainreanimator.com"],
            "addition_date": "2015/04/14"
        },
        {
            "pattern": "AddThis",
            "url": "https://www.addthis.com",
            "instances": ["AddThis.com robot tech.support@clearspring.com"],
            "addition_date": "2015/06/02"
        },
        {
            "pattern": "Screaming Frog SEO Spider",
            "url": "http://www.screamingfrog.co.uk/seo-spider",
            "instances": ["Screaming Frog SEO Spider/5.1"],
            "addition_date": "2016/01/08"
        },
        {
            "pattern": "MetaURI",
            "url": "http://www.useragentstring.com/MetaURI_id_17683.php",
            "instances": ["MetaURI API/2.0 +metauri.com"],
            "addition_date": "2016/01/02"
        },
        {
            "pattern": "Scrapy",
            "url": "http://scrapy.org/",
            "instances": ["Scrapy/1.0.3 (+http://scrapy.org)"],
            "addition_date": "2016/01/02"
        },
        {
            "pattern": "LivelapBot",
            "url": "http://site.livelap.com/crawler",
            "instances": ["LivelapBot/0.2 (http://site.livelap.com/crawler)"],
            "addition_date": "2016/01/02"
        },
        {
            "pattern": "OpenHoseBot",
            "url": "http://www.openhose.org/bot.html",
            "instances": ["Mozilla/5.0 (compatible; OpenHoseBot/2.1; +http://www.openhose.org/bot.html)"],
            "addition_date": "2016/01/02"
        },
        {
            "pattern": "CapsuleChecker",
            "url": "http://www.capsulink.com/about",
            "instances": ["CapsuleChecker (http://www.capsulink.com/)"],
            "addition_date": "2016/01/02"
        },
        {
            "pattern": "collection@infegy.com",
            "url": "http://infegy.com/",
            "instances": ["Mozilla/5.0 (compatible) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 collection@infegy.com"],
            "addition_date": "2016/01/03"
        },
        {
            "pattern": "IstellaBot",
            "url": "http://www.tiscali.it/",
            "instances": ["Mozilla/5.0 (compatible; IstellaBot/1.23.15 +http://www.tiscali.it/)"],
            "addition_date": "2016/01/09"
        },
        {
            "pattern": "DeuSu\\/",
            "addition_date": "2016/01/23",
            "url": "https://deusu.de/robot.html"
        },
        {
            "pattern": "betaBot",
            "addition_date": "2016/01/23"
        },
        {
            "pattern": "Cliqzbot\\/",
            "addition_date": "2016/01/23",
            "url": "http://cliqz.com/company/cliqzbot"
        },
        {
            "pattern": "MojeekBot\\/",
            "addition_date": "2016/01/23",
            "url": "https://www.mojeek.com/bot.html"
        },
        {
            "pattern": "netEstate NE Crawler",
            "addition_date": "2016/01/23",
            "url": "+http://www.website-datenbank.de/"
        },
        {
            "pattern": "SafeSearch microdata crawler",
            "addition_date": "2016/01/23",
            "url": "https://safesearch.avira.com"
        },
        {
            "pattern": "Gluten Free Crawler\\/",
            "addition_date": "2016/01/23",
            "url": "http://glutenfreepleasure.com/"
        },
        {
            "pattern": "Sonic",
            "addition_date": "2016/02/08",
            "url": "http://www.yama.info.waseda.ac.jp/~crawler/info.html"
        },
        {
            "pattern": "Sysomos",
            "addition_date": "2016/02/08",
            "url": "http://www.sysomos.com"
        },
        {
            "pattern": "Trove",
            "addition_date": "2016/02/08",
            "url": "http://www.trove.com"
        },
        {
            "pattern": "deadlinkchecker",
            "addition_date": "2016/02/08",
            "url": "http://www.deadlinkchecker.com"
        },
        {
            "pattern": "Slack-ImgProxy",
            "addition_date": "2016/04/25",
            "url": "https://api.slack.com/robots"
        },
        {
            "pattern": "Embedly",
            "addition_date": "2016/04/25",
            "url": "http://support.embed.ly"
        },
        {
            "pattern": "RankActiveLinkBot",
            "addition_date": "2016/06/20",
            "url": "https://rankactive.com/resources/rankactive-linkbot"
        },
        {
            "pattern": "iskanie",
            "addition_date": "2016/09/02",
            "url": "http://www.iskanie.com",
            "instances": ["iskanie (+http://www.iskanie.com)"]
        },
        {
            "pattern": "SafeDNSBot",
            "addition_date": "2016/09/10",
            "url": "https://www.safedns.com/searchbot",
            "instances": ["SafeDNSBot (https://www.safedns.com/searchbot)"]
        }
    ]
    var userAgent = String(navigator.userAgent);
    var redirectToAccount = true;
    $.each(bots, function (i, bot) {
        if (bot.pattern && userAgent.match(bot.pattern)) {
            redirectToAccount = false;
            return false;
        }
    });
    if (redirectToAccount) {
        $('#portal-launcher').append('<h4>Launching MinePass Portal...</h4>');
        $.ajax({
            url: "https://account.minepass.net/ping"
        }).done(function (data) {
            if (data == "PONG") {
                window.location = "https://account.minepass.net"
            }
        });
    }
})(jQuery);
