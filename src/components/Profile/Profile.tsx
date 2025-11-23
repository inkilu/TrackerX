
import type { CSSProperties } from 'react';
import Dialog from '@mui/material/Dialog';
import type { User } from "firebase/auth";
type ProfileProps = {
    profileOpen: boolean,
    setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>,
    user: User,
    handleSignOut: () => void
}



const Profile = ({ profileOpen, setProfileOpen, user, handleSignOut }: ProfileProps) => {
    const styles: { [key: string]: CSSProperties } = {
        container: {
            width: '100%',
            maxWidth: '95vw',
            background: 'linear-gradient(140deg, rgba(86, 23, 182, 1) 10%, rgba(17, 98, 47, 1) 100%)',
            color: '#e3e3e3',
            padding: '16px',
            fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
            boxShadow: '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            paddingTop: '8px',
            position: 'relative',
        },
        emailText: {
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.2px',
            color: '#e3e3e3',
        },
        closeButton: {
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#e3e3e3',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '50%',
            lineHeight: 1,
        },
        profileSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '24px',
        },
        avatarWrapper: {
            position: 'relative',
            marginBottom: '12px',
        },
        avatarInnerBorder: {
            backgroundColor: '#2d2e30',
            padding: '3px',
            borderRadius: '50%',
            display: 'flex', // fix for image display
        },
        avatarImage: {
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
        },
        greetingText: {
            fontSize: '22px',
            fontWeight: 400,
            margin: 0,
            color: '#e3e3e3',
        },
        manageButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px',
        },
        manageButton: {
            padding: '10px 24px',
            backgroundColor: 'transparent',
            border: '1px solid #8e918f',
            borderRadius: '100px',
            color: '#a8c7fa',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        },
        actionButtonsContainer: {
            display: 'flex',
            width: '100%',
            gap: '2px', // slight gap between buttons
        },
        actionButton: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1f1f1f',
            border: 'none',
            padding: '16px 0',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
        },
        actionButtonLeft: {
            borderRadius: '24px 4px 4px 24px',
        },
        actionButtonRight: {
            borderRadius: '30px',
        },
        actionButtonText: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#e3e3e3',
        },
        footer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '20px',
            fontSize: '11px',
            color: '#8e918f',
        },
        footerLink: {
            background: 'none',
            border: 'none',
            color: '#8e918f',
            fontSize: '11px',
            padding: 0,
            cursor: 'pointer',
            textDecoration: 'none',
        },
        footerDot: {
            userSelect: 'none',
        },
    };
    return (
        <div style={{ borderRadius: '162px' }}>
            <Dialog onClose={() => { setProfileOpen(false) }} fullWidth open={profileOpen} sx={{
                '& .MuiDialog-paperScrollPaper': {
                    borderRadius: '18px'
                }
            }}>
                <div style={styles.container}>
                    {/* --- Header: Email & Close --- */}
                    <div style={styles.header}>
                        <span style={styles.emailText}>{user?.email}</span>

                    </div>
                    {/* --- Profile Section --- */}
                    <div style={styles.profileSection}>
                        <div style={styles.avatarWrapper}>
                            {/* Conic Gradient Ring */}
                            <img
                                src={user?.photoURL || undefined}
                                alt={''}
                                style={styles.avatarImage}
                            />
                            {/* Removed Camera Icon as requested */}
                        </div>

                        <h2 style={styles.greetingText}>
                            Hi, {user?.displayName || ''}!
                        </h2>
                    </div>
                    {/* --- Bottom Action Buttons --- */}
                    <div style={styles.actionButtonsContainer}>
                        {/* Sign Out */}
                        <button
                            onClick={handleSignOut}
                            style={{ ...styles.actionButton, ...styles.actionButtonRight }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#303030')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1f1f1f')}
                        >
                            {/* No Icon */}
                            <span style={styles.actionButtonText}>Sign out</span>
                        </button>
                    </div>

                    {/* --- Footer Links --- */}
                    <div style={styles.footer}>
                        <button style={styles.footerLink}>Made by ink</button>
                        <span style={styles.footerDot}>•</span>
                        <button style={styles.footerLink}>2025</button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Profile