import React from "react";
import Button from "@/components/Button";
function TestTable() {


    return (
        <section id="fluidContent">
            <div className="centerWrapper">
                <div className="centerCard fullWidth noBr noPad">
                    <div className="tableTop">
                        <div className="formInput modelSearch mb0">
                            <label className="pl52" htmlFor="action">
                                Testler
                            </label>
                            <input type="text" placeholder="Test ID, test adı ya da etiketinde ara" />
                        </div>
                        <div className="formButton">
                                <Button
                                    type="button"
                                    url="/testFlow"
                                >
                                    <img src="/images/add.svg" alt="" /> Yeni test oluştur
                                </Button>
                        </div>
                    </div>
                    <div className="tableWrapper">
                        <div id="example_wrapper" className="dataTables_wrapper no-footer">
                            <table id="example" className="display dataTable no-footer" >
                                <thead>
                                <tr>
                                    <th>Test ID</th>
                                    <th>Test Adı</th>
                                    <th>Statü</th>
                                    <th>Son Çalıştırma Tarihi</th>
                                    <th>Oluşturan</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch noMar">
                                            <input type="checkbox" id="table-id1" />
                                            <label htmlFor="table-id1"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch passiveSwitch noMar">
                                            <input type="checkbox" id="table-id2" />
                                            <label htmlFor="table-id2"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch passiveSwitch noMar">
                                            <input type="checkbox" id="table-id3" />
                                            <label htmlFor="table-id3"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch noMar">
                                            <input type="checkbox" id="table-id4" />
                                            <label htmlFor="table-id4"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch noMar">
                                            <input type="checkbox" id="table-id5" />
                                            <label htmlFor="table-id5"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>TP - 236</td>
                                    <td>Başarılı Login</td>
                                    <td>
                                        <div className="toggleSwitch noMar">
                                            <input type="checkbox" id="table-id6" />
                                            <label htmlFor="table-id6"></label>
                                        </div>
                                    </td>
                                    <td>22.10.2019</td>
                                    <td>
                                        <strong>Berkan</strong>
                                    </td>
                                    <td>
                                        <a href="src/components#">Rapor</a>
                                    </td>
                                    <td>
                                        <button>
                                            <img src="/images/select.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestTable;