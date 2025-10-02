const { Telegraf } = require('telegraf');

// ⚡ PASTE YOUR BOT TOKEN HERE ⚡
const BOT_TOKEN = '7701970165:AAFmPpYOJ92MT033UoJLmxfQX7rIe703k6E';

// Initialize bot
const bot = new Telegraf(BOT_TOKEN);

console.log('🚀 Starting WhatsApp Bots Explorer...');

// Simple start command
bot.start((ctx) => {
    ctx.reply(`🤖 *WhatsApp Bots Explorer* ⚡

Welcome! I help you discover amazing WhatsApp bots.

Tap the buttons below to explore!`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🤖 Browse Bots', callback_data: 'show_bots' },
                    { text: '🎥 Tutorials', callback_data: 'show_tutorials' }
                ],
                [
                    { text: '⚡ Live Demo', callback_data: 'show_demo' },
                    { text: '👥 Community', callback_data: 'show_community' }
                ]
            ]
        }
    });
});

// Bots menu
bot.action('show_bots', (ctx) => {
    ctx.editMessageText(`🤖 *Available WhatsApp Bots*

Choose a bot to explore:`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔐 CYPHERX', callback_data: 'bot_cypherx' },
                    { text: '🚀 SPACE-MD', callback_data: 'bot_space_md' }
                ],
                [
                    { text: '🌙 JUNE-MD', callback_data: 'bot_june_md' },
                    { text: '⚡ FLASH-MD', callback_data: 'bot_flash_md' }
                ],
                [
                    { text: '🔙 Main Menu', callback_data: 'main_menu' }
                ]
            ]
        }
    });
});

// Tutorials menu
bot.action('show_tutorials', (ctx) => {
    ctx.editMessageText(`🎥 *Video Tutorials*

Learn how to setup and use our bots:`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🚀 Beginner Guide', url: 'https://youtu.be/70jl067lpPE' },
                    { text: '🖥️ Hosting Tutorial', url: 'https://youtu.be/CubUTlj0y4Y' }
                ],
                [
                    { text: '⚙️ Panel Setup', url: 'https://youtu.be/snuq53DZ8bE' },
                    { text: '📺 YouTube Channel', url: 'https://youtube.com/@kevoloves' }
                ],
                [
                    { text: '🔙 Main Menu', callback_data: 'main_menu' }
                ]
            ]
        }
    });
});

// Community menu
bot.action('show_community', (ctx) => {
    ctx.editMessageText(`👥 *Join Our Community*

Connect with us:`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '📢 Telegram', url: 'https://t.me/whatsapp_bots_overloaded' },
                    { text: '💬 WhatsApp', url: 'https://whatsapp.com/channel/0029Vb6XQInFXUud1tMwcu0G' }
                ],
                [
                    { text: '🎥 YouTube', url: 'https://youtube.com/@kevoloves' },
                    { text: '🌐 Website', url: 'https://your-website.com' }
                ],
                [
                    { text: '🔙 Main Menu', callback_data: 'main_menu' }
                ]
            ]
        }
    });
});

// Demo menu
bot.action('show_demo', (ctx) => {
    ctx.editMessageText(`⚡ *Live Demos*

Test bot features:`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔐 CYPHERX Demo', callback_data: 'demo_cypherx' },
                    { text: '🚀 SPACE-MD Demo', callback_data: 'demo_space_md' }
                ],
                [
                    { text: '⚡ FLASH-MD Demo', callback_data: 'demo_flash_md' },
                    { text: '🗑️ TRASH-CORE Demo', callback_data: 'demo_trash_core' }
                ],
                [
                    { text: '🔙 Main Menu', callback_data: 'main_menu' }
                ]
            ]
        }
    });
});

// Main menu
bot.action('main_menu', (ctx) => {
    ctx.editMessageText(`🏠 *Main Menu*

Choose what you want to explore:`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🤖 Browse Bots', callback_data: 'show_bots' },
                    { text: '🎥 Tutorials', callback_data: 'show_tutorials' }
                ],
                [
                    { text: '⚡ Live Demo', callback_data: 'show_demo' },
                    { text: '👥 Community', callback_data: 'show_community' }
                ]
            ]
        }
    });
});

// Bot details
bot.action('bot_cypherx', (ctx) => {
    ctx.editMessageText(`🔐 *CYPHERX Bot*

Advanced encryption and security features.

*Links:*
• [Repository](https://github.com/Dark-Xploit/CypherX)
• [Pairing Site](https://www.cypherx.space/)
• [Video Tutorial](https://youtu.be/70jl067lpPE)`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '📁 Repository', url: 'https://github.com/Dark-Xploit/CypherX' },
                    { text: '🔗 Pairing Site', url: 'https://www.cypherx.space/' }
                ],
                [
                    { text: '🎥 Tutorial', url: 'https://youtu.be/70jl067lpPE' },
                    { text: '🔙 Browse Bots', callback_data: 'show_bots' }
                ]
            ]
        }
    });
});

bot.action('bot_space_md', (ctx) => {
    ctx.editMessageText(`🚀 *SPACE-MD Bot*

Out-of-this-world cosmic features.

*Links:*
• [Repository](https://github.com/Dark-Xploit/SPACE-MD)
• [Pairing Site](https://www.cypherx.space/)
• [Video Tutorial](https://youtu.be/rc1J3-BdjNk)`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '📁 Repository', url: 'https://github.com/Dark-Xploit/SPACE-MD' },
                    { text: '🔗 Pairing Site', url: 'https://www.cypherx.space/' }
                ],
                [
                    { text: '🎥 Tutorial', url: 'https://youtu.be/rc1J3-BdjNk' },
                    { text: '🔙 Browse Bots', callback_data: 'show_bots' }
                ]
            ]
        }
    });
});

// Add more bot handlers as needed...

// Demo handlers
bot.action('demo_cypherx', (ctx) => {
    ctx.editMessageText(`🔐 *CYPHERX DEMO*

Try these commands:
\`/secure\` - Enable security
\`/encrypt\` - Encrypt messages  
\`/protect\` - Activate protection

*Type any command to test!*`, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '🔙 Back to Demos', callback_data: 'show_demo' }
                ]
            ]
        }
    });
});

// Demo command responses
bot.hears('/secure', (ctx) => {
    ctx.reply('🔐 *Security Mode Activated*\nYour messages are now encrypted!', { parse_mode: 'Markdown' });
});

bot.hears('/encrypt', (ctx) => {
    ctx.reply('🔒 *Encryption Enabled*\nAll communications are secure.', { parse_mode: 'Markdown' });
});

bot.hears('/protect', (ctx) => {
    ctx.reply('🛡️ *Protection Active*\nChat is now protected.', { parse_mode: 'Markdown' });
});

// Start bot
bot.launch().then(() => {
    console.log('✅ Bot is running successfully!');
}).catch(err => {
    console.log('❌ Bot failed to start:', err);
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
