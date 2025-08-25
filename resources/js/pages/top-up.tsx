import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

interface Service {
    id: number;
    name?: string;
    provider?: string;
    icon?: string;
    type?: string;
    package?: string;
    price?: number;
    denominations?: number[];
    plans?: string[];
}

interface Props {
    services: {
        games: Service[];
        emoney: Service[];
        pulsa: Service[];
        data: Service[];
        pln: Service[];
        streaming: Service[];
        voucher: Service[];
    };
    [key: string]: unknown;
}

const menuItems = [
    { key: 'games', label: 'Games', icon: '🎮' },
    { key: 'emoney', label: 'E-Money', icon: '💰' },
    { key: 'pulsa', label: 'Pulsa', icon: '📱' },
    { key: 'data', label: 'Data', icon: '📊' },
    { key: 'tlp', label: 'Tlp & Sms', icon: '☎️' },
    { key: 'masa-aktif', label: 'Masa Aktif', icon: '⏰' },
    { key: 'pln', label: 'PLN', icon: '⚡' },
    { key: 'voucher', label: 'Voucher', icon: '🎫' },
    { key: 'streaming', label: 'Streaming', icon: '📺' },
    { key: 'pascabayar', label: 'Pascabayar', icon: '💳' },
    { key: 'akun', label: 'Akun', icon: '👤' },
];

export default function TopUp({ services }: Props) {
    const [activeService, setActiveService] = useState('games');
    const [phoneNumber, setPhoneNumber] = useState('');

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const renderServiceContent = () => {
        const currentServices = services[activeService as keyof typeof services] || [];

        if (activeService === 'games') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">🎮 Top Up Game</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {currentServices.map((game) => (
                            <div key={game.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="text-3xl mb-2">{game.icon}</div>
                                <h4 className="font-medium text-gray-800">{game.name}</h4>
                                <div className="mt-3 space-y-2">
                                    {game.denominations?.slice(0, 3).map((amount, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-3 py-2 text-sm bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600"
                                        >
                                            {amount} Diamonds - {formatRupiah(amount * 1000)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeService === 'emoney') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">💰 Top Up E-Money</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentServices.map((emoney) => (
                            <div key={emoney.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{emoney.icon}</span>
                                    <h4 className="text-lg font-semibold text-gray-800">{emoney.name}</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {emoney.denominations?.map((amount, index) => (
                                        <button
                                            key={index}
                                            className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-green-50 hover:text-green-600 transition-colors"
                                        >
                                            {formatRupiah(amount)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeService === 'pulsa') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">📱 Top Up Pulsa</h3>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                        <input
                            type="text"
                            placeholder="Masukkan nomor HP"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentServices.map((provider) => (
                            <div key={provider.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl mr-3">{provider.icon}</span>
                                    <h4 className="text-lg font-semibold text-gray-800">{provider.provider}</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {provider.denominations?.map((amount, index) => (
                                        <button
                                            key={index}
                                            className="px-3 py-2 text-sm bg-gray-100 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            {formatRupiah(amount)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeService === 'data') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">📊 Paket Data</h3>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                        <input
                            type="text"
                            placeholder="Masukkan nomor HP"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentServices.map((dataPackage) => (
                            <div key={dataPackage.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
                                <h4 className="font-semibold text-gray-800 mb-2">{dataPackage.provider}</h4>
                                <p className="text-blue-600 font-medium mb-2">{dataPackage.package}</p>
                                <p className="text-green-600 font-bold">{formatRupiah(dataPackage.price || 0)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeService === 'pln') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">⚡ Token PLN</h3>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                        <input
                            type="text"
                            placeholder="Masukkan ID Pelanggan PLN"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">⚡ Pilih Nominal Token</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {currentServices[0]?.denominations?.map((amount, index) => (
                                <button
                                    key={index}
                                    className="px-4 py-3 text-sm bg-yellow-50 border border-yellow-200 rounded hover:bg-yellow-100 hover:border-yellow-300 transition-colors"
                                >
                                    {formatRupiah(amount)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (activeService === 'streaming') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">📺 Streaming Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentServices.map((streaming) => (
                            <div key={streaming.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{streaming.icon}</span>
                                    <h4 className="text-lg font-semibold text-gray-800">{streaming.name}</h4>
                                </div>
                                <div className="space-y-2">
                                    {streaming.plans?.map((plan, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-4 py-3 text-sm bg-gray-50 rounded hover:bg-purple-50 hover:text-purple-600 transition-colors"
                                        >
                                            {plan}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeService === 'voucher') {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">🎫 Voucher Game</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {currentServices.map((voucher) => (
                            <div key={voucher.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{voucher.icon}</span>
                                    <h4 className="text-lg font-semibold text-gray-800">{voucher.name}</h4>
                                </div>
                                <div className="space-y-2">
                                    {voucher.denominations?.map((amount, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-3 py-2 text-sm bg-gray-100 rounded hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                        >
                                            {formatRupiah(amount)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        // Default content for other services
        return (
            <div className="text-center py-12">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h3>
                <p className="text-gray-600">Service {activeService} sedang dalam pengembangan</p>
            </div>
        );
    };

    return (
        <>
            <Head title="TopUp Services" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="text-2xl">💳</div>
                                <h1 className="text-2xl font-bold text-gray-800">TopUp Center</h1>
                            </div>
                            <div className="hidden md:flex space-x-4">
                                <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                    Masuk
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    Daftar
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Sidebar Menu */}
                        <div className="col-span-12 lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-24">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu Layanan</h2>
                                <nav className="space-y-2">
                                    {menuItems.map((item) => (
                                        <button
                                            key={item.key}
                                            onClick={() => setActiveService(item.key)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                                activeService === item.key
                                                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                            }`}
                                        >
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-span-12 lg:col-span-9">
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                {renderServiceContent()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-12 mt-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-2xl">💳</span>
                                    <span className="text-xl font-bold">TopUp Center</span>
                                </div>
                                <p className="text-gray-400">
                                    Platform terpercaya untuk top up pulsa, data, game, dan berbagai layanan digital.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Layanan</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>Top Up Game</li>
                                    <li>Pulsa & Data</li>
                                    <li>E-Money</li>
                                    <li>Token PLN</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Dukungan</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>Pusat Bantuan</li>
                                    <li>FAQ</li>
                                    <li>Hubungi Kami</li>
                                    <li>Status Layanan</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4">Kontak</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>📞 0800-1234-5678</li>
                                    <li>📧 support@topupcenter.com</li>
                                    <li>💬 Chat 24/7</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 TopUp Center. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}