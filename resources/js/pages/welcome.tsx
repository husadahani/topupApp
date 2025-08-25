import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="TopUp Center - One-Stop Digital Services">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="text-3xl">💳</div>
                                <h1 className="text-2xl font-bold text-gray-800">TopUp Center</h1>
                            </div>
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                        >
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                💳 TopUp Center
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Platform terpercaya untuk semua kebutuhan top up digital Anda. 
                                Pulsa, data, game, e-money, PLN, streaming, dan masih banyak lagi!
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Link
                                    href={route('topup.index')}
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                                >
                                    🚀 Mulai Top Up Sekarang
                                </Link>
                                <button className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                                    📞 Hubungi Kami
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            🎯 Layanan Lengkap Kami
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { icon: '🎮', title: 'Top Up Game', desc: 'Mobile Legends, Free Fire, PUBG' },
                                { icon: '💰', title: 'E-Money', desc: 'GoPay, OVO, DANA, ShopeePay' },
                                { icon: '📱', title: 'Pulsa', desc: 'Telkomsel, Indosat, XL, Tri' },
                                { icon: '📊', title: 'Paket Data', desc: 'Internet cepat, harga terjangkau' },
                                { icon: '☎️', title: 'Tlp & SMS', desc: 'Paket nelpon dan SMS murah' },
                                { icon: '⏰', title: 'Masa Aktif', desc: 'Perpanjang masa aktif kartu' },
                                { icon: '⚡', title: 'Token PLN', desc: 'Listrik prabayar instant' },
                                { icon: '🎫', title: 'Voucher', desc: 'Google Play, iTunes, Steam' },
                                { icon: '📺', title: 'Streaming', desc: 'Netflix, Spotify, YouTube' },
                                { icon: '💳', title: 'Pascabayar', desc: 'Bayar tagihan bulanan' },
                                { icon: '👤', title: 'Akun Premium', desc: 'Upgrade akun aplikasi' },
                                { icon: '🎁', title: 'Gift Card', desc: 'Hadiah untuk orang terkasih' },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-blue-100"
                                >
                                    <div className="text-4xl mb-3">{service.icon}</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                ⭐ Mengapa Pilih TopUp Center?
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Pengalaman top up terbaik dengan fitur unggulan
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '⚡', title: 'Proses Instan', desc: 'Top up langsung masuk dalam hitungan detik' },
                                { icon: '🔒', title: 'Aman & Terpercaya', desc: 'Keamanan data dan transaksi terjamin' },
                                { icon: '💰', title: 'Harga Terbaik', desc: 'Harga paling kompetitif di pasaran' },
                                { icon: '🎯', title: 'Layanan 24/7', desc: 'Customer service siap membantu kapan saja' },
                            ].map((feature, index) => (
                                <div key={index} className="text-center text-white">
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-blue-100">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                📈 Kepercayaan Jutaan Pengguna
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: '1M+', label: 'Pengguna Aktif', icon: '👥' },
                                { number: '10M+', label: 'Transaksi Berhasil', icon: '✅' },
                                { number: '50+', label: 'Jenis Layanan', icon: '🎯' },
                                { number: '99.9%', label: 'Uptime Server', icon: '🚀' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            🎉 Siap Mulai Top Up?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8">
                            Bergabung dengan jutaan pengguna yang sudah merasakan kemudahan top up di TopUp Center!
                        </p>
                        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
                            <Link
                                href={route('topup.index')}
                                className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg"
                            >
                                🚀 Mulai Top Up Gratis
                            </Link>
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="inline-block px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-bold text-lg"
                                >
                                    📝 Daftar Sekarang
                                </Link>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-2xl">💳</span>
                                    <span className="text-xl font-bold">TopUp Center</span>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Platform terpercaya untuk semua kebutuhan top up digital Anda.
                                </p>
                                <div className="flex space-x-3">
                                    <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                                    <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📷</span>
                                    <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                                    <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">💬</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4 text-gray-200">🎮 Layanan Populer</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="hover:text-white cursor-pointer">Mobile Legends</li>
                                    <li className="hover:text-white cursor-pointer">Free Fire</li>
                                    <li className="hover:text-white cursor-pointer">GoPay & OVO</li>
                                    <li className="hover:text-white cursor-pointer">Paket Data</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4 text-gray-200">🏢 Perusahaan</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="hover:text-white cursor-pointer">Tentang Kami</li>
                                    <li className="hover:text-white cursor-pointer">Karir</li>
                                    <li className="hover:text-white cursor-pointer">Press Kit</li>
                                    <li className="hover:text-white cursor-pointer">Blog</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-4 text-gray-200">📞 Bantuan</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="hover:text-white cursor-pointer">Pusat Bantuan</li>
                                    <li className="hover:text-white cursor-pointer">FAQ</li>
                                    <li className="hover:text-white cursor-pointer">Hubungi Kami</li>
                                    <li className="hover:text-white cursor-pointer">0800-1234-5678</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 TopUp Center. All rights reserved. Built with ❤️ for Indonesian users.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}