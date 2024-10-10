"use client";

import { AppShell, Burger, Button, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Navbar.module.css";
import Link from "next/link";

export function Navbar({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            {/* <MantineLogo size={30} /> */}

            <Group ml="xl" gap={0} visibleFrom="sm">
              <button className={classes.control}>
                <Link href="/">خانه</Link>
              </button>
              <button className={classes.control}>
                <Link href="/SensorPagination">اطلاعات کل سنسور‌ها</Link>
              </button>

              {/* <button className={classes.control}></button> */}
              {/* <button className={classes.control}>Contacts</button> */}
              {/* <button className={classes.control}>Support</button> */}
            </Group>

            <span>سامانه شناسایی دود لحظه‌ای</span>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <button className={classes.control}>Home</button>
        {/* <button className={classes.control}></button> */}
        {/* <button className={classes.control}>Contacts</button> */}
        {/* <button className={classes.control}>Support</button> */}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
