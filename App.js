import React, { Component } from 'react';
import Header from './component/header'



import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css.map'
import ReactAudioPlayer from "react-audio-player";


export default class App extends Component {
    Telgram=()=>{
        window.location.href="https://t.me/ASHKEVARVAKILI"
    }
    Instagram=()=>{
        window.location.href="https://instagram.com/pooriaashkevarvakili"
    }

    render() {



        return (

            <div style={{
                overflow:"hidden"
            }}>

                <Header/>
                <div>

                </div>
                <div >


                    <div>

                    </div>









                </div>

                <ul >
                    <div></div>

                    <div>

                        <div>
                            <div style={{
                                width:150,
                                height:150,

                                left:300,
                                bottom:-75,
                                position:"relative"
                            }}>
                                <button>

                                    <img style={{
                                        width:150,
                                        height:150,

                                    }}
                                         src={require('./music/georgemichael.jpeg')}
                                    >


                                    </img>
                                    <ReactAudioPlayer
                                        src={require('./music/Older')}

                                        controls
                                    />
                                </button>
                            </div>
                            <div style={{
                                width:150,
                                height:150,

                                left:630,
                                bottom:75,
                                position:"relative"
                            }}       >
                                <button>
                                    <img style={{
                                        width:150,
                                        height:150,

                                    }}
                                         src={require('./music/bijan.jpeg')}
                                    >


                                    </img>
                                    <ReactAudioPlayer
                                        src={require('./music/EyMaahBebin')}

                                        controls
                                    />
                                </button>
                            </div>
                            <div  style={{

                                width:150,
                                height:150,

                                left:960,
                                bottom:225,
                                position:"relative"

                            }}>
                                <button>
                                    <img style={{
                                        width:150,
                                        height:150,

                                    }}
                                         src={require('./music/siavash.jpeg')}
                                    >


                                    </img>
                                    <ReactAudioPlayer
                                        src={require('./music/siavashgomeshyAshegh')}

                                        controls
                                    />
                                </button>
                            </div>
                            <div

                                style={{

                                    width:150,
                                    height:150,
                                    position:'relative',
                                    bottom:375,
                                    left:-30,
                                    borderWidth:1




                                }}
                            >
                                <button>
                                    <img style={{
                                        width:150,
                                        height:150
                                    }}
                                         src={require('./music/macan.jpeg')}
                                    >


                                    </img>
                                    <ReactAudioPlayer
                                        src={require('./music/Macan Band - Ki Boodi To Akhe (320).mp3')}

                                        controls
                                    />

                                </button>
                            </div>
                            <img
                                src={require('./music/macan.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    left:150,
                                    bottom:250
                                }}
                            />
                        </div>
                        <div>
                            <h1
                                style={{
                                    fontSize:20,
                                    position:"relative",
                                    bottom:350,
                                    left:70,
                                    color:"black"

                                }}
                            >جدیدترین درسایت</h1>
                        </div>

                        <Link

                            to="/kiBoodyAkhe"><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:330,
                                left:50
                            }}



                        >کی بودی آخه</h1></Link>
                        <div>
                            <img
                                src={require('./music/georgemichael.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    left:150,
                                    bottom:300
                                }}
                            />
                        </div>
                        <Link to='/older' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:345,
                                left:90
                            }}
                        >
                            older
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/bijan.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:320,
                                    left:150
                                }}
                            />
                        </div>
                        <Link to='/eyMahBebin' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:370,
                                left:60
                            }}
                        >
                            ای ماه ببین
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/siavash.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:340,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/rafigh' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:380,
                                left:100

                            }}
                        >
                            رفیق
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/omidHazily.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:360,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/tardast' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:400,
                                left:90

                            }}
                        >
                            تردست
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/emad.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:380,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/maghroor' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:430,
                                left:100


                            }}
                        >
                            مغرور
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/macan.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:400,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/aserKhoob' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:450,
                                left:70


                            }}
                        >
                            عصرخوب
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/mohesnYeghane.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:425,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/daryab' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:470,
                                left:90


                            }}
                        >
                            دریاب
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/masihArash.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:450,
                                    left:150

                                }}
                            />
                        </div>
                        <Link to='/darya' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:490,
                                left:100


                            }}
                        >
                            دریا
                        </h1></Link>
                        <div>
                            <img
                                src={require('./music/tanbedah.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:390,
                                    left:150
                                }}
                            />
                            <div>
                                <h1
                                    style={{
                                        fontSize:18,
                                        position:"relative",
                                        bottom:510,
                                        left:150,
                                        color:'black'
                                    }}
                                >
                                    تاپ ترین ها

                                </h1>
                            </div>
                            <Link to='/haminKeHast' ><h1
                                style={{
                                    fontSize:18,
                                    color:"black",
                                    position:"relative",
                                    bottom:470,
                                    left:25


                                }}
                            >
                                همین که هست
                            </h1></Link>
                        </div>
                        <img
                            src={require('./music/mahdyMoghadam.jpeg')}
                            style={{
                                width:70,
                                height:70,
                                position:"relative",
                                bottom:440,
                                left:150
                            }}
                        />
                        <Link to='/pashimun' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:480,
                                left:70


                            }}
                        >
                            پشیمون
                        </h1></Link>
                        <img
                            src={require('./music/babakjahanbakhesh.jpeg')}
                            style={{
                                width:70,
                                height:70,
                                position:"relative",
                                bottom:460,
                                left:150
                            }}
                        />
                        <Link to='/zibayBeTab' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:500,
                                left:30


                            }}
                        >
                            زیبای بی تاب
                        </h1></Link>
                        <img
                            src={require('./music/afshin.jpeg')}
                            style={{
                                width:70,
                                height:70,
                                position:"relative",
                                bottom:480,
                                left:150

                            }}
                        />
                        <Link to='/fanoosMah' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:515,
                                left:40


                            }}
                        >
                            فانوس ماه
                        </h1></Link>
                        <img
                            src={require('./music/darush.jpeg')}
                            style={{
                                width:70,
                                height:70,
                                position:"relative",
                                bottom:500,
                                left:150

                            }}
                        />
                        <Link to='/shamMahtab' ><h1
                            style={{
                                fontSize:18,
                                color:"black",
                                position:"relative",
                                bottom:540,
                                left:40


                            }}
                        >
                            شام مهتاب
                        </h1></Link>
                        <div>
                            <h1 style={{
                                fontSize:18,
                                color:"black",
                                fontWeight:"bold",
                                position:"relative",
                                left:1130,
                                bottom:1740
                            }}>
                                آخرین آرشیو
                            </h1>
                            <img
                                src={require('./music/behrooz.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:1715,
                                    left:1150
                                }}
                            />
                            <Link to='/delamMilarze' ><h1
                                style={{
                                    fontSize:18,
                                    color:"black",
                                    position:"relative",
                                    bottom:1770,
                                    left:1060


                                }}
                            >
                                دلم میلرزه
                            </h1></Link>
                            <img
                                src={require('./music/kaveAfagh.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:1740,
                                    left:1150
                                }}
                            />
                            <Link to='/shal' ><h1
                                style={{
                                    fontSize:18,
                                    color:"black",
                                    position:"relative",
                                    bottom:1790,
                                    left:1090


                                }}
                            >
                                شال
                            </h1></Link>
                            <img
                                src={require('./music/babakjahanbakhesh.jpeg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:1760,
                                    left:1150
                                }}
                            />
                            <Link to='/fekershoKon' ><h1
                                style={{
                                    fontSize:18,
                                    color:"black",
                                    position:"relative",
                                    bottom:1810,
                                    left:1050


                                }}
                            >
                                فکرش کن
                            </h1>
                            </Link>
                            <img
                                src={require('./music/hasanShameyzade.jpg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:1780,
                                    left:1150
                                }}
                            />
                            <Link to='/mordab' ><h1
                                style={{
                                    fontSize:18,
                                    color:"black",
                                    position:"relative",
                                    bottom:1830,
                                    left:1080


                                }}
                            >
                                مرداب
                            </h1></Link>
                            <img
                                src={require('./music/shadmehr.jpg')}
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    bottom:1805,
                                    left:1150
                                }}
                            />
                            <Link to='/shabBerahne'

                            >
                                <h1
                                    style={{
                                        position:"relative",
                                        bottom:1860,
                                        left:1050,
                                        color:"black",
                                        fontSize:20
                                    }}
                                >
                                    شب برهنه
                                </h1>
                            </Link>
                        </div>
                        <img
                            src={require('./music/alirezaTalischy.jpg')}
                            style={{
                                width:70,
                                height:70,
                                position:"relative",
                                left:1150,
                                bottom:1830
                            }}
                        />
                        <Link to='/zendeghyJunam'>
                            <h1
                                style={{
                                    width:70,
                                    height:70,
                                    position:"relative",
                                    color:"black",
                                    fontSize:16,
                                    bottom:1890,
                                    left:1100
                                }}
                            >
                                زندگی جونم
                            </h1>
                        </Link>
                        <div>
                            <img
                                src={require('./music/babakjahanbakhesh.jpeg')}
                                style={{
                                    width:600,
                                    height:600,
                                    position:"relative",
                                    left:350,
                                    bottom:2390
                                }}
                            />
                            <h1 style={{
                                fontSize:18,
                                color:"black",
                                fontWeight:"bold",
                                position:"relative",
                                bottom:2360,
                                left:500
                            }}>
                                دانلود آهنگ بابک جهان بخش به نام پریزاد
                            </h1>
                            <div
                                style={{
                                    borderStyle:"solid",
                                    borderColor:"red",
                                    borderWidth:1,
                                    marginLeft:480,
                                    position:"relative",
                                    bottom:2350,
                                    marginRight:480,
                                }}
                            >
                                <Link to='/parizad'>
                                    <h1 style={{
                                        fontSize:22,
                                        color:"black",
                                        fontWeight:"bold",

                                        left:10,
                                        textAlign:"center",
                                    }}>
                                        ادامه مطلب ودانلود
                                    </h1>
                                </Link>
                            </div>

                            <img src={require('./music/darush.jpeg')}
                                 style={{
                                     width:600,
                                     height:600,
                                     position:"relative",
                                     bottom:2330,
                                     left:350,

                                 }}
                            />
                            <h1 style={{
                                position:"relative",
                                fontSize:22,
                                color:"black",
                                fontWeight:"bold",
                                left:490,
                                bottom:2310,

                            }}>
                                دانلود آهنگ داریوش شیرین وفرهاد
                            </h1>
                            <div style={{
                                borderStyle:"solid",
                                borderColor:"red",
                                borderWidth:1,
                                marginLeft:480,
                                position:"relative",
                                bottom:2300,
                                marginRight:480,


                            }}>
                                <Link to='/shrinoFarhad'>
                                    <h1 style={{
                                        fontSize:22,
                                        color:"black",
                                        fontWeight:"bold",
                                        textAlign:"center"
                                    }}>
                                        ادامه مطلب و دانلود
                                    </h1>
                                </Link>
                            </div>
                            <div
                            >
                                <img src={require('./music/omidHazily.jpeg')}
                                     style={{
                                         width:600,
                                         height:600,
                                         position:"relative",
                                         bottom:2270,
                                         left:350
                                     }}
                                />
                                <h1 style={{
                                    fontSize:20,
                                    color:"black",
                                    fontWeight:"bold",
                                    position:"relative",
                                    bottom:2250,
                                    left:530
                                }}>
                                    دانلود اهنگ امید حاجیلی  دلبر
                                </h1>
                                <div style={{
                                    borderStyle:"solid",
                                    borderColor:"red",
                                    borderWidth:1,
                                    marginLeft:480,
                                    position:"relative",
                                    bottom:2240,
                                    marginRight:480,
                                    right:20


                                }}>
                                    <Link to='/delbar'>
                                        <h1 style={{
                                            fontSize:22,
                                            color:"black",
                                            fontWeight:"bold",
                                            textAlign:"center"
                                        }}>
                                            ادامه مطلب و دانلود
                                        </h1>
                                    </Link>
                                </div>
                            </div>
                            <div >
                                <img src={require('./music/siavash.jpeg')}
                                     style={{
                                         width:600,
                                         height:600,
                                         position:"relative",
                                         bottom:2220,
                                         left:350
                                     }}
                                />
                            </div>
                            <h1 style={{
                                fontSize:20,
                                color:"black",
                                fontWeight:"bold",
                                position:"relative",
                                bottom:2200,
                                left:530
                            }}>
                                دانلود آهنگ سیاوش قمیشی فرنگیز
                            </h1>
                            <div style={{
                                borderStyle:"solid",
                                borderColor:"red",
                                borderWidth:1,
                                marginLeft:480,
                                position:"relative",
                                bottom:2180,
                                marginRight:480,

                            }}>
                                <Link to='/farangiz'>
                                    <h1 style={{
                                        fontSize:22,
                                        color:"black",
                                        fontWeight:"bold",
                                        textAlign:"center"
                                    }}>
                                        ادامه مطلب ودانلود
                                    </h1>
                                </Link>
                            </div>
                            <div>
                                <img src={require('./music/eblis.jpg')}
                                     style={{
                                         width:600,
                                         height:600,
                                         position:"relative",
                                         bottom:2150,
                                         left:350
                                     }}
                                />
                                <h1 style={{
                                    fontSize:20,
                                    color:"black",
                                    fontWeight:"bold",
                                    position:"relative",
                                    bottom:2120,
                                    left:530
                                }}>
                                    دانلود آهنگ حسین ابلیس شبها
                                </h1>
                                <div style={{
                                    borderStyle:"solid",
                                    borderColor:"red",
                                    borderWidth:1,
                                    marginLeft:480,
                                    position:"relative",
                                    bottom:2090,
                                    marginRight:480,
                                }}>
                                    <Link to='/shabha'>
                                        <h1 style={{
                                            fontSize:22,
                                            color:"black",
                                            fontWeight:"bold",
                                            textAlign:"center"
                                        }}>
                                            ادامه مطلب ودانلود
                                        </h1>
                                    </Link>
                                </div>
                                <div>
                                    <img src={require('./music/blackcats.jpg')}
                                         style={{
                                             width:600,
                                             height:600,
                                             position:"relative",
                                             bottom:2050,
                                             left:350
                                         }}

                                    />
                                    <h1 style={{
                                        fontSize:20,
                                        color:"black",
                                        fontWeight:"bold",
                                        position:"relative",
                                        bottom:2020,
                                        left:530
                                    }}>
                                        دانلود آهنگ بلک کتس لیلی
                                    </h1>
                                    <div style={{
                                        borderStyle:"solid",
                                        borderColor:"red",
                                        borderWidth:1,
                                        marginLeft:480,
                                        position:"relative",
                                        right:10,
                                        bottom:2010,
                                        marginRight:480,
                                    }}>
                                        <Link to='/lily'
                                        >
                                            <h1 style={{
                                                fontSize:22,
                                                color:"black",
                                                fontWeight:"bold",
                                                textAlign:"center"
                                            }}>ادامه مطلب ودانلود</h1>
                                        </Link>
                                    </div>
                                    <div>
                                        <img src={require('./music/andy.jpg')}
                                             style={{
                                                 width:600,
                                                 height:600,
                                                 position:"relative",
                                                 bottom:1980,
                                                 left:350
                                             }}
                                        />
                                        <h1 style={{
                                            fontSize:20,
                                            color:"black",
                                            fontWeight:"bold",
                                            position:"relative",
                                            bottom:1950,
                                            left:550
                                        }}>
                                            دانلود اهنگ اندی بلا
                                        </h1>
                                        <div style={{
                                            borderStyle:"solid",
                                            borderColor:"red",
                                            borderWidth:1,
                                            marginLeft:480,
                                            position:"relative",
                                            right:20,
                                            bottom:1930,
                                            marginRight:480,
                                        }}>
                                            <Link to='/bala'>
                                                <h1 style={{
                                                    fontSize:22,
                                                    color:"black",
                                                    fontWeight:"bold",
                                                    textAlign:"center"
                                                }}>
                                                    ادامه مطلب و دانلود
                                                </h1>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={require('./music/siamakAbassy.jpg')}
                                             style={{
                                                 width:600,
                                                 height:600,
                                                 position:"relative",
                                                 bottom:1900,
                                                 left:350
                                             }}
                                        />
                                        <h1 style={{
                                            fontSize:20,
                                            color:"black",
                                            fontWeight:"bold",
                                            position:"relative",
                                            bottom:1870,
                                            left:530
                                        }}>
                                            دانلود آهنگ خوشبختی آرزومه
                                        </h1>
                                        <div style={{
                                            borderStyle:"solid",
                                            borderColor:"red",
                                            borderWidth:1,
                                            marginLeft:480,
                                            position:"relative",
                                            right:20,
                                            bottom:1850,
                                            marginRight:480,
                                        }}>
                                            <Link to='/khoshbakhty'>
                                                <h1 style={{
                                                    fontSize:22,
                                                    color:"black",
                                                    fontWeight:"bold",
                                                    textAlign:"center"
                                                }}>
                                                    ادامه مطلب ودانلود
                                                </h1>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={require('./music/shadmehr.jpg')}

                                             style={{
                                                 width:600,
                                                 height:600,
                                                 position:"relative",
                                                 bottom:1820,
                                                 left:350
                                             }}
                                        />
                                        <h1 style={{
                                            fontSize:20,
                                            color:"black",
                                            fontWeight:"bold",
                                            position:"relative",
                                            bottom:1790,
                                            left:500
                                        }}>
                                            دانلودآهنگ شادمهر وقتی که بد میشم
                                        </h1>
                                        <div style={{
                                            borderStyle:"solid",
                                            borderColor:"red",
                                            borderWidth:1,
                                            marginLeft:480,
                                            position:"relative",
                                            right:20,
                                            bottom:1760,
                                            marginRight:480,
                                        }}>
                                            <Link to='/shadmehr'>
                                                <h1 style={{
                                                    fontSize:22,
                                                    color:"black",
                                                    fontWeight:"bold",
                                                    textAlign:"center"
                                                }}>
                                                    دانلود آهنگ وادامه
                                                </h1>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={require('./music/amirAbass.jpg')}
                                             style={{
                                                 width:600,
                                                 height:600,
                                                 position:"relative",
                                                 bottom:1730,
                                                 left:350
                                             }}
                                        />
                                        <h1 style={{
                                            fontSize:20,
                                            color:"black",
                                            fontWeight:"bold",
                                            position:"relative",
                                            bottom:1690,
                                            left:500
                                        }}>
                                            دانلود آهنگ امیرعباس شاه قلبم
                                        </h1>
                                        <div style={{
                                            borderStyle:"solid",
                                            borderColor:"red",
                                            borderWidth:1,
                                            marginLeft:480,
                                            position:"relative",
                                            right:20,
                                            bottom:1670,
                                            marginRight:480,
                                        }}>
                                            <Link to='/shahGalbam'>
                                                <h1 style={{
                                                    fontSize:22,
                                                    color:"black",
                                                    fontWeight:"bold",
                                                    textAlign:"center"
                                                }}>
                                                    دانلودآهنگ وادامه
                                                </h1>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={require('./music/moein.jpg')}
                                             style={{
                                                 width:600,
                                                 height:600,
                                                 position:"relative",
                                                 bottom:1650,
                                                 left:350
                                             }}
                                        />
                                        <h1 style={{
                                            fontSize:20,
                                            color:"black",
                                            fontWeight:"bold",
                                            position:"relative",
                                            bottom:1615,
                                            left:550
                                        }}>
                                            دانلود آهنگ معین جان جانان
                                        </h1>
                                        <div style={{
                                            borderStyle:"solid",
                                            borderColor:"red",
                                            borderWidth:1,
                                            marginLeft:480,
                                            position:"relative",
                                            right:20,
                                            bottom:1600,
                                            marginRight:480,
                                        }}>
                                            <Link to='/janJanan'>
                                                <h1 style={{
                                                    fontSize:22,
                                                    color:"black",
                                                    fontWeight:"bold",
                                                    textAlign:"center"
                                                }}>
                                                    ادامه مطلب و دانلود
                                                </h1>
                                            </Link>

                                        </div>
                                    </div>
                                    <div style={{
                                        width:1500,
                                        height:250,
                                        backgroundColor:"#7437FF",
                                        borderWidth:2
                                    }}>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:10
                                        }}>
                                            <Link to='/'>
                                                <h1 style={{
                                                    fontSize:15,

                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}>صفحه ی اصلی</h1>
                                            </Link>
                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:30
                                        }}>
                                            <Link to='/site'>
                                                <h1 style={{
                                                    fontSize:15,

                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}>درباره سایت</h1>
                                            </Link>
                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:40
                                        }}>

                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:30
                                        }}>
                                            <Link to='/ertebat'>
                                                <h1 style={{
                                                    fontSize:15,
                                                    top:50,

                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}>ارتباط با ما</h1>
                                            </Link>
                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:60
                                        }}>
                                            <Link to='/login'>
                                                <h1 style={{
                                                    fontSize:15,
                                                    top:60,

                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}>ورود</h1>
                                            </Link>
                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:20,
                                            left:40
                                        }}>
                                            <Link to='/signUp'>
                                                <h1 style={{
                                                    fontSize:15,
                                                    top:20,

                                                    color:"black",
                                                    fontWeight:"bold"
                                                }}>ثبت نام</h1>
                                            </Link>
                                        </div>
                                        <div style={{
                                            position:'relative',
                                            top:30,
                                            left:10,

                                        }}>

                                        </div>

                                        <div>


                                            <img src={require('./music/telgram.png')}
                                                 style={{
                                                     width:40,
                                                     height:40,
                                                     cursor:"pointer",
                                                     position:"relative",
                                                     left:30,
                                                     top:45
                                                 }}
                                                 onClick={this.Telgram}/>

                                        </div>

                                        <div>

                                            <img src={require('./music/instagramicon.png')}
                                                 style={{
                                                     width:40,
                                                     height:40,
                                                     position:"relative",
                                                     left:90,
                                                     cursor:"pointer",
                                                     top:5
                                                 }}
                                                 onClick={this.Instagram}/>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </ul>
            </div>








        );
    }
}
